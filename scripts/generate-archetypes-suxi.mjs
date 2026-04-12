import fs from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const dataDir = path.join(rootDir, "src", "data");
const outputDir = path.join(rootDir, "output", "imagegen", "archetypes");
const publicDir = path.join(rootDir, "public", "archetypes");
const manifestPath = path.join(outputDir, "prompts.json");
const frontendPalette = {
  paper: "#f5efe5",
  card: "#fffaf2",
  ink: "#111315",
  muted: "#5f6158",
  signal: "#ff6c3a",
  signalDeep: "#d54f25",
  acid: "#d9ff57",
  pool: "#8cd6f8",
};
const archetypeVisualNotes = {
  LURK:
    "Use icon-like interface blocks, a screenshot flash, and a folder symbol. No readable app text.",
  AURA:
    "Keep the face partially veiled by soft glow but still readable and charming. No letters or typographic marks anywhere.",
  REPL:
    "Replace all speech text with heart emojis, spark icons, abstract chat bubbles, and energetic motion. No words.",
  FEED:
    "Use ring light, tripod, camera, progress dials, and metric icons without any labels or numerals.",
  CRSH:
    "Show receipt-paper strips with abstract lines only, furious notification cards, and a flame/skull icon. No readable comments or words.",
  COPE:
    "Show a thought bubble with an abstract systems diagram using nodes, arrows, and symbols only. No letters, captions, or labels.",
  DELU:
    "Emphasize glamor, red-carpet energy, camera flashes, and spotlight shapes with no written signage.",
  MUTE:
    "Use double-check icons, muted notification symbols, and clean abstract message blocks. No text.",
  CTRL:
    "Use a stopwatch, charts, curtain reveal, and photo silhouettes with no written planning board text.",
  COOK:
    "Use a chef hat, cauldron, sparks, and social-chaos symbols only. Remove all lettering from props and clothing.",
  NPCX:
    "Use a loading ring, placeholder iconography, and faint pixel motifs without any readable text.",
  IRLY:
    "Use oversized soft speech bubbles and heart/context icons without letters or phrases.",
  LOCK:
    "Use holographic lock icons, shield forms, and biometric scan motifs with no interface text.",
  SPIN:
    "Use a clapperboard, cinematic glow, and scene props without any words or episode labels.",
};

const apiKey = process.env.IMAGE_API_KEY ?? process.env.OPENAI_API_KEY;
const apiBaseUrl = (process.env.IMAGE_API_BASE_URL ?? "https://api.openai.com").replace(/\/+$/, "");
const model = process.env.IMAGE_MODEL || "gpt-image-1";
const quality = process.env.IMAGE_QUALITY || "low";
const size = process.env.IMAGE_SIZE || "1024x1024";
const imageCount = Number.parseInt(process.env.IMAGE_N || "1", 10);
const apiMode = process.env.IMAGE_API_MODE || "auto";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
const selectedCodeArg = args.find((argument) => argument.startsWith("--code="));
const selectedCode = selectedCodeArg ? selectedCodeArg.slice("--code=".length).toUpperCase() : null;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const markdownImagePattern = /!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/i;
const bareUrlPattern = /(https?:\/\/[^\s]+)/i;

const resolveApiMode = () => {
  if (apiMode !== "auto") {
    return apiMode;
  }

  return model.startsWith("gemini-") ? "gemini" : "openai";
};

const sizeToAspectRatio = (input) => {
  const normalized = input.trim().toLowerCase();

  if (normalized === "1024x1024" || normalized === "1:1") {
    return "1:1";
  }

  if (normalized === "1024x1536" || normalized === "2:3") {
    return "2:3";
  }

  if (normalized === "1536x1024" || normalized === "3:2") {
    return "3:2";
  }

  if (normalized === "1024x1280" || normalized === "4:5") {
    return "4:5";
  }

  if (normalized === "1280x1024" || normalized === "5:4") {
    return "5:4";
  }

  if (normalized === "1024x1792" || normalized === "9:16") {
    return "9:16";
  }

  if (normalized === "1792x1024" || normalized === "16:9") {
    return "16:9";
  }

  return "1:1";
};

const extractEnglishTail = (line) => {
  const match = line.match(/[A-Za-z].*$/);
  return match ? match[0].trim() : "";
};

const fileExists = async (targetPath) => {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
};

const downloadImageFromUrl = async (imageUrl, code) => {
  const imageResponse = await fetch(imageUrl);

  if (!imageResponse.ok) {
    throw new Error(`${code} image download failed with ${imageResponse.status}.`);
  }

  return Buffer.from(await imageResponse.arrayBuffer());
};

const resolvePromptFile = async () => {
  const override = process.env.ARCHETYPE_PROMPT_FILE;

  if (override) {
    return path.isAbsolute(override) ? override : path.join(rootDir, override);
  }

  const entries = await fs.readdir(dataDir, { withFileTypes: true });
  const promptFiles = entries.filter(
    (entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".txt"),
  );

  if (promptFiles.length !== 1) {
    throw new Error(
      `Expected exactly one prompt sheet in ${dataDir}, found ${promptFiles.length}.`,
    );
  }

  return path.join(dataDir, promptFiles[0].name);
};

const parsePromptFile = (content) => {
  const normalized = content.replace(/\r\n/g, "\n");
  const baseMatch = normalized.match(/Common Base:\s*([\s\S]*?)(?:\n\s*\n|$)/);

  if (!baseMatch) {
    throw new Error("Could not parse the common base prompt.");
  }

  const basePrompt = baseMatch[1].trim();
  const sections = normalized
    .split(/\n(?=\d+\.\s+[A-Z]{4,5}\s+\/)/)
    .filter((section) => /^\d+\.\s+[A-Z]{4,5}\s+\//.test(section.trim()));

  return sections.map((section) => {
    const trimmed = section.trim();
    const header = trimmed.match(/^\d+\.\s+([A-Z]{4,5})\s+\/\s+([^\(\n]+)/m);

    if (!header) {
      throw new Error(`Could not parse a prompt section header:\n${trimmed.slice(0, 120)}`);
    }

    const candidateLines = trimmed
      .split("\n")
      .map(extractEnglishTail)
      .filter((line) => line.length > 80 && /[.!?]"?$/.test(line));
    const exclusiveDescription = candidateLines.sort((left, right) => right.length - left.length)[0];

    if (!exclusiveDescription) {
      throw new Error(`Could not parse the exclusive description for ${header[1]}.`);
    }

    const code = header[1].trim();
    const title = header[2].trim();
    const extraVisualNote = archetypeVisualNotes[code] ?? "Use visual symbols instead of text.";
    const prompt = [
      "Use case: stylized-concept",
      "Asset type: website personality-quiz result illustration",
      `Primary request: Create the collectible character image for ${code} / ${title}.`,
      `Scene/backdrop: clean premium studio setup with a soft cream paper backdrop in ${frontendPalette.paper}, subtle card warmth from ${frontendPalette.card}, and a very soft radial gradient haze inspired by the FEEDTYPE UI.`,
      `Subject: ${title}. ${exclusiveDescription}`,
      `Design note: ${extraVisualNote}`,
      `Style/medium: ${basePrompt} Premium 3D rendered blind-box collectible, glossy vinyl finish, website-ready stylized illustration.`,
      "Composition/framing: centered full-body single character, square 1:1 composition, readable silhouette, generous breathing room.",
      "Lighting/mood: soft studio lighting, playful but polished, editorial, internet-native.",
      `Color palette: harmonious FEEDTYPE palette only. Base neutrals ${frontendPalette.paper}, ${frontendPalette.card}, ${frontendPalette.ink}, ${frontendPalette.muted}; controlled accents ${frontendPalette.signal}, ${frontendPalette.signalDeep}, ${frontendPalette.acid}, ${frontendPalette.pool}. Keep saturation elegant and balanced, not neon-chaotic.`,
      "Materials/textures: glossy toy plastic, crisp fabric texture on clothing and props, clean shadows, high micro-detail.",
      "Constraints: one character only; no text; no watermark; no logo; no extra characters; no busy background; keep the archetype prop readable; keep enough negative space for a rounded-corner card crop in the website result panel.",
      `Avoid: photoreal skin, horror styling, muddy colors, cluttered composition, dark cinematic background, off-brand purple, harsh black backgrounds, colors outside the FEEDTYPE palette unless used as tiny neutral details, any readable letters, numbers, UI labels, captions, logos, watermarks, or written signs.`,
    ].join("\n");

    return {
      code,
      title,
      exclusiveDescription,
      prompt,
    };
  });
};

const writeManifest = async (promptFile, jobs) => {
  const manifest = {
    apiBaseUrl,
    model,
    quality,
    size,
    promptFile,
    generatedAt: new Date().toISOString(),
    jobCount: jobs.length,
    jobs,
  };

  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
};

const generateImageOpenAI = async (prompt, code, attempt = 1) => {
  const response = await fetch(`${apiBaseUrl}/v1/images/generations`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt,
      n: imageCount,
      size,
      quality,
      response_format: "b64_json",
      output_format: "png",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    if (attempt < 3 && (response.status === 429 || response.status >= 500)) {
      const backoffMs = attempt * 4000;
      console.warn(`${code} failed with ${response.status}. Retrying in ${backoffMs}ms.`);
      await sleep(backoffMs);
      return generateImageOpenAI(prompt, code, attempt + 1);
    }

    throw new Error(`${code} failed with ${response.status}: ${errorText}`);
  }

  const payload = await response.json();
  const firstImage = payload?.data?.[0];
  const imageBase64 = firstImage?.b64_json;

  if (imageBase64) {
    return Buffer.from(imageBase64, "base64");
  }

  if (firstImage?.url) {
    return downloadImageFromUrl(firstImage.url, code);
  }

  throw new Error(`${code} returned no image payload.`);
};

const generateImageGemini = async (prompt, code, attempt = 1) => {
  const response = await fetch(`${apiBaseUrl}/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"],
        imageConfig: {
          aspectRatio: sizeToAspectRatio(size),
        },
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    if (attempt < 3 && (response.status === 429 || response.status >= 500)) {
      const backoffMs = attempt * 4000;
      console.warn(`${code} failed with ${response.status}. Retrying in ${backoffMs}ms.`);
      await sleep(backoffMs);
      return generateImageGemini(prompt, code, attempt + 1);
    }

    throw new Error(`${code} failed with ${response.status}: ${errorText}`);
  }

  const payload = await response.json();
  const parts = payload?.candidates?.[0]?.content?.parts ?? [];
  const imagePart =
    parts.find((part) => part?.inlineData?.data) ??
    parts.find((part) => part?.inline_data?.data);
  const imageBase64 = imagePart?.inlineData?.data ?? imagePart?.inline_data?.data;

  if (!imageBase64) {
    const textPart = parts.find((part) => typeof part?.text === "string");
    const text = textPart?.text ?? "";
    const markdownMatch = text.match(markdownImagePattern);
    const bareUrlMatch = text.match(bareUrlPattern);
    const imageUrl = markdownMatch?.[1] ?? bareUrlMatch?.[1];

    if (imageUrl) {
      return downloadImageFromUrl(imageUrl, code);
    }

    throw new Error(`${code} returned no image payload.`);
  }

  return Buffer.from(imageBase64, "base64");
};

const generateImage = async (prompt, code, attempt = 1) => {
  const mode = resolveApiMode();
  return mode === "gemini"
    ? generateImageGemini(prompt, code, attempt)
    : generateImageOpenAI(prompt, code, attempt);
};

const main = async () => {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.mkdir(publicDir, { recursive: true });

  const promptFile = await resolvePromptFile();
  const fileContent = await fs.readFile(promptFile, "utf8");
  const parsedJobs = parsePromptFile(fileContent);
  const jobs = selectedCode
    ? parsedJobs.filter((job) => job.code === selectedCode)
    : parsedJobs;

  if (selectedCode && jobs.length === 0) {
    throw new Error(`No archetype found for code ${selectedCode}.`);
  }

  await writeManifest(promptFile, jobs);

  if (dryRun) {
    console.log(`Prepared ${jobs.length} prompts from ${promptFile}.`);
    console.log(`Prompt manifest written to ${manifestPath}.`);
    return;
  }

  if (!apiKey) {
    throw new Error("IMAGE_API_KEY or OPENAI_API_KEY is not set.");
  }

  const failures = [];

  for (const job of jobs) {
    const filename = `${job.code.toLowerCase()}.png`;
    const outputPath = path.join(outputDir, filename);
    const publicPath = path.join(publicDir, filename);

    if (!force && (await fileExists(outputPath)) && (await fileExists(publicPath))) {
      console.log(`Skipping ${job.code}; image already exists. Use --force to regenerate.`);
      continue;
    }

    try {
      console.log(`Generating ${job.code}...`);
      const imageBuffer = await generateImage(job.prompt, job.code);
      await fs.writeFile(outputPath, imageBuffer);
      await fs.writeFile(publicPath, imageBuffer);
      console.log(`Saved ${outputPath}`);
      console.log(`Copied ${publicPath}`);
      await sleep(1200);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push({ code: job.code, message });
      console.error(`Failed ${job.code}: ${message}`);
    }
  }

  if (failures.length > 0) {
    console.error(`Completed with ${failures.length} failures.`);
    for (const failure of failures) {
      console.error(`${failure.code}: ${failure.message}`);
    }
    process.exit(1);
  }
};

main().catch((error) => {
  if (error instanceof Error) {
    console.error(error.message);
    if (error.stack) {
      console.error(error.stack);
    }
  } else {
    console.error(String(error));
  }
  process.exit(1);
});
