import fs from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const promptFile = path.join(rootDir, "src", "data", "人物形象图片生成.txt");
const outputDir = path.join(rootDir, "output", "imagegen", "archetypes");
const publicDir = path.join(rootDir, "public", "archetypes");

const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.IMAGE_MODEL || "gpt-image-1.5";
const quality = process.env.IMAGE_QUALITY || "low";
const size = process.env.IMAGE_SIZE || "1024x1024";

if (!apiKey) {
  console.error("OPENAI_API_KEY is not set.");
  process.exit(1);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const parsePromptFile = (content) => {
  const normalized = content.replace(/\r\n/g, "\n");
  const baseMatch = normalized.match(/Common Base:\s*([\s\S]*?)\n\s*\n（中文参考）/);

  if (!baseMatch) {
    throw new Error("Could not parse the common base prompt.");
  }

  const basePrompt = baseMatch[1].trim();
  const sections = normalized
    .split(/\n(?=\d+\.\s+[A-Z]{4,5}\s+\/)/)
    .filter((section) => /^\d+\.\s+[A-Z]{4,5}\s+\//.test(section.trim()));

  return sections.map((section) => {
    const trimmed = section.trim();
    const header = trimmed.match(/^\d+\.\s+([A-Z]{4,5})\s+\/\s+([^\(]+)/m);
    const description = trimmed.match(/专属描述：\s*([\s\S]*?)\n\n（中文参考）/);

    if (!header || !description) {
      throw new Error(`Could not parse a prompt section:\n${trimmed.slice(0, 120)}`);
    }

    return {
      code: header[1].trim(),
      title: header[2].trim(),
      exclusiveDescription: description[1].trim(),
      prompt: [
        "Use case: stylized-concept",
        "Asset type: website result character illustration",
        `Primary request: Create the collectible character image for ${header[1].trim()} / ${header[2].trim()}. ${basePrompt} ${description[1].trim()}`,
        "Style/medium: premium 3D rendered vinyl toy, blind-box collectible, stylized illustration",
        "Composition/framing: centered full-body character, square composition, clear readable silhouette, single subject only",
        "Lighting/mood: soft studio lighting, glossy finish, playful and polished collectible presentation",
        "Color palette: vibrant pastel colors with a clean solid-color background",
        "Constraints: one character only; no text; no watermark; no logos; no extra characters; keep the pose readable and the meme-specific props visible",
      ].join("\n"),
    };
  });
};

const generateImage = async (prompt, code, attempt = 1) => {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt,
      size,
      quality,
      output_format: "png",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    if (attempt < 3 && (response.status === 429 || response.status >= 500)) {
      const backoffMs = attempt * 4000;
      console.warn(`${code} failed with ${response.status}. Retrying in ${backoffMs}ms.`);
      await sleep(backoffMs);
      return generateImage(prompt, code, attempt + 1);
    }

    throw new Error(`${code} failed with ${response.status}: ${errorText}`);
  }

  const payload = await response.json();
  const imageBase64 = payload?.data?.[0]?.b64_json;

  if (!imageBase64) {
    throw new Error(`${code} returned no image payload.`);
  }

  return Buffer.from(imageBase64, "base64");
};

const main = async () => {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.mkdir(publicDir, { recursive: true });

  const fileContent = await fs.readFile(promptFile, "utf8");
  const jobs = parsePromptFile(fileContent);

  for (const job of jobs) {
    const filename = `${job.code.toLowerCase()}.png`;
    const outputPath = path.join(outputDir, filename);
    const publicPath = path.join(publicDir, filename);

    console.log(`Generating ${job.code}...`);
    const imageBuffer = await generateImage(job.prompt, job.code);
    await fs.writeFile(outputPath, imageBuffer);
    await fs.writeFile(publicPath, imageBuffer);
    console.log(`Saved ${outputPath}`);
    console.log(`Copied ${publicPath}`);
    await sleep(1200);
  }
};

main().catch((error) => {
  if (error instanceof Error) {
    console.error(error.message);
    if (error.cause) {
      console.error(String(error.cause));
    }
    if (error.stack) {
      console.error(error.stack);
    }
  } else {
    console.error(String(error));
  }
  process.exit(1);
});
