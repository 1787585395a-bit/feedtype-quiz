import { useEffect, useState, type CSSProperties } from "react";
import { uiCopy, dimensionLabelsByLocale } from "./data/i18n";
import { questions } from "./data/questions";
import { results } from "./data/results";
import { calculateScores, dimensionKeys, resolveResult } from "./lib/scoring";
import type { DimensionScores, Locale, Localized, ResultProfile } from "./types";

const QUIZ_STORAGE_KEY = "feedtype.quiz.answers";
const RESULT_STORAGE_KEY = "feedtype.quiz.result";
const LOCALE_STORAGE_KEY = "feedtype.quiz.locale";

type Route =
  | { view: "landing" }
  | { view: "quiz" }
  | { view: "result"; code: string };

type ResultSnapshot = {
  code: string;
  scores: DimensionScores;
};

type ResultTheme = {
  accent: string;
  accentSoft: string;
  glowA: string;
  glowB: string;
  wash: string;
};

const defaultResultTheme: ResultTheme = {
  accent: "#ff6c3a",
  accentSoft: "rgba(255, 108, 58, 0.18)",
  glowA: "rgba(255, 108, 58, 0.18)",
  glowB: "rgba(140, 214, 248, 0.22)",
  wash: "rgba(255, 250, 242, 0.82)",
};

const resultThemes: Record<string, ResultTheme> = {
  LURK: {
    accent: "#8cd6f8",
    accentSoft: "rgba(140, 214, 248, 0.18)",
    glowA: "rgba(140, 214, 248, 0.32)",
    glowB: "rgba(17, 19, 21, 0.08)",
    wash: "rgba(255, 255, 255, 0.72)",
  },
  AURA: {
    accent: "#ff6c3a",
    accentSoft: "rgba(255, 108, 58, 0.16)",
    glowA: "rgba(255, 108, 58, 0.28)",
    glowB: "rgba(217, 255, 87, 0.2)",
    wash: "rgba(255, 250, 242, 0.84)",
  },
  REPL: {
    accent: "#ff6c3a",
    accentSoft: "rgba(255, 108, 58, 0.18)",
    glowA: "rgba(255, 108, 58, 0.24)",
    glowB: "rgba(140, 214, 248, 0.2)",
    wash: "rgba(255, 255, 255, 0.74)",
  },
  FEED: {
    accent: "#d9ff57",
    accentSoft: "rgba(217, 255, 87, 0.24)",
    glowA: "rgba(217, 255, 87, 0.28)",
    glowB: "rgba(140, 214, 248, 0.22)",
    wash: "rgba(255, 250, 242, 0.82)",
  },
  CRSH: {
    accent: "#d54f25",
    accentSoft: "rgba(213, 79, 37, 0.2)",
    glowA: "rgba(255, 108, 58, 0.26)",
    glowB: "rgba(17, 19, 21, 0.1)",
    wash: "rgba(255, 248, 243, 0.82)",
  },
  COPE: {
    accent: "#8cd6f8",
    accentSoft: "rgba(140, 214, 248, 0.18)",
    glowA: "rgba(140, 214, 248, 0.26)",
    glowB: "rgba(255, 108, 58, 0.14)",
    wash: "rgba(255, 255, 255, 0.74)",
  },
  DELU: {
    accent: "#ff6c3a",
    accentSoft: "rgba(255, 108, 58, 0.18)",
    glowA: "rgba(255, 108, 58, 0.28)",
    glowB: "rgba(217, 255, 87, 0.18)",
    wash: "rgba(255, 248, 241, 0.84)",
  },
  MUTE: {
    accent: "#111315",
    accentSoft: "rgba(17, 19, 21, 0.12)",
    glowA: "rgba(17, 19, 21, 0.12)",
    glowB: "rgba(140, 214, 248, 0.18)",
    wash: "rgba(255, 255, 255, 0.74)",
  },
  CTRL: {
    accent: "#8cd6f8",
    accentSoft: "rgba(140, 214, 248, 0.18)",
    glowA: "rgba(140, 214, 248, 0.24)",
    glowB: "rgba(217, 255, 87, 0.18)",
    wash: "rgba(255, 255, 255, 0.74)",
  },
  COOK: {
    accent: "#ff6c3a",
    accentSoft: "rgba(255, 108, 58, 0.2)",
    glowA: "rgba(255, 108, 58, 0.28)",
    glowB: "rgba(217, 255, 87, 0.22)",
    wash: "rgba(255, 250, 242, 0.82)",
  },
  NPCX: {
    accent: "#5f6158",
    accentSoft: "rgba(95, 97, 88, 0.12)",
    glowA: "rgba(95, 97, 88, 0.12)",
    glowB: "rgba(140, 214, 248, 0.16)",
    wash: "rgba(255, 255, 255, 0.76)",
  },
  IRLY: {
    accent: "#ff6c3a",
    accentSoft: "rgba(255, 108, 58, 0.16)",
    glowA: "rgba(255, 108, 58, 0.22)",
    glowB: "rgba(217, 255, 87, 0.18)",
    wash: "rgba(255, 249, 244, 0.84)",
  },
  LOCK: {
    accent: "#111315",
    accentSoft: "rgba(17, 19, 21, 0.14)",
    glowA: "rgba(17, 19, 21, 0.12)",
    glowB: "rgba(140, 214, 248, 0.22)",
    wash: "rgba(255, 255, 255, 0.74)",
  },
  SPIN: {
    accent: "#8cd6f8",
    accentSoft: "rgba(140, 214, 248, 0.18)",
    glowA: "rgba(140, 214, 248, 0.28)",
    glowB: "rgba(255, 108, 58, 0.16)",
    wash: "rgba(255, 250, 242, 0.84)",
  },
};

const readStoredJson = <T,>(key: string): T | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
};

const writeStoredJson = (key: string, value: unknown): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage failures and keep the in-memory session working.
  }
};

const removeStoredValue = (key: string): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.removeItem(key);
  } catch {
    // Ignore storage failures.
  }
};

const isLocale = (value: string): value is Locale => value === "en" || value === "zh-CN";

const getStoredLocale = (): Locale | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(LOCALE_STORAGE_KEY);
    return raw && isLocale(raw) ? raw : null;
  } catch {
    return null;
  }
};

const detectBrowserLocale = (): Locale => {
  if (typeof window === "undefined") {
    return "en";
  }

  const candidates =
    window.navigator.languages && window.navigator.languages.length > 0
      ? window.navigator.languages
      : [window.navigator.language];

  return candidates.some((language) => language.toLowerCase().startsWith("zh"))
    ? "zh-CN"
    : "en";
};

const writeStoredLocale = (locale: Locale): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore storage failures and keep the in-memory session working.
  }
};

const parseRoute = (): Route => {
  if (typeof window === "undefined") {
    return { view: "landing" };
  }

  const hash = window.location.hash.replace(/^#/, "");

  if (hash.startsWith("/quiz")) {
    return { view: "quiz" };
  }

  if (hash.startsWith("/result/")) {
    const code = hash.slice("/result/".length).toUpperCase();

    if (code) {
      return { view: "result", code };
    }
  }

  return { view: "landing" };
};

const syncHash = (route: Route): void => {
  if (typeof window === "undefined") {
    return;
  }

  if (route.view === "landing") {
    window.location.hash = "";
    return;
  }

  if (route.view === "quiz") {
    window.location.hash = "/quiz";
    return;
  }

  window.location.hash = `/result/${route.code}`;
};

const getStoredAnswers = (): Record<string, string> =>
  readStoredJson<Record<string, string>>(QUIZ_STORAGE_KEY) ?? {};

const getStoredResult = (): ResultSnapshot | null =>
  readStoredJson<ResultSnapshot>(RESULT_STORAGE_KEY);

const getResumeIndex = (answers: Record<string, string>): number => {
  const nextQuestionIndex = questions.findIndex((question) => !answers[question.id]);
  return nextQuestionIndex === -1 ? questions.length - 1 : nextQuestionIndex;
};

const getResultByCode = (code: string): ResultProfile | undefined =>
  results.find((result) => result.code === code);

const getResultThemeStyle = (code?: string): CSSProperties => {
  const theme = (code && resultThemes[code]) || defaultResultTheme;

  return {
    "--result-accent": theme.accent,
    "--result-accent-soft": theme.accentSoft,
    "--result-glow-a": theme.glowA,
    "--result-glow-b": theme.glowB,
    "--result-wash": theme.wash,
  } as CSSProperties;
};

function App() {
  const [locale, setLocale] = useState<Locale>(() => getStoredLocale() ?? detectBrowserLocale());
  const [route, setRoute] = useState<Route>(() => parseRoute());
  const [answers, setAnswers] = useState<Record<string, string>>(() => getStoredAnswers());
  const [questionIndex, setQuestionIndex] = useState<number>(() =>
    getResumeIndex(getStoredAnswers()),
  );
  const [resultSnapshot, setResultSnapshot] = useState<ResultSnapshot | null>(() =>
    getStoredResult(),
  );
  const [imageUnavailable, setImageUnavailable] = useState(false);

  useEffect(() => {
    writeStoredLocale(locale);
  }, [locale]);

  useEffect(() => {
    const onHashChange = () => {
      const nextRoute = parseRoute();
      setRoute(nextRoute);

      if (nextRoute.view === "quiz") {
        const storedAnswers = getStoredAnswers();
        setAnswers(storedAnswers);
        setQuestionIndex(getResumeIndex(storedAnswers));
      }

      if (nextRoute.view === "result") {
        setResultSnapshot(getStoredResult());
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    setImageUnavailable(false);
  }, [route.view === "result" ? route.code : resultSnapshot?.code]);

  const pick = <T,>(value: Localized<T>): T => value[locale];
  const copy = uiCopy[locale];
  const dimensionLabels = dimensionLabelsByLocale[locale];

  const resetQuiz = () => {
    setAnswers({});
    setQuestionIndex(0);
    setResultSnapshot(null);
    removeStoredValue(QUIZ_STORAGE_KEY);
    removeStoredValue(RESULT_STORAGE_KEY);
  };

  const goHome = () => {
    resetQuiz();
    syncHash({ view: "landing" });
    setRoute({ view: "landing" });
  };

  const startQuiz = () => {
    resetQuiz();
    syncHash({ view: "quiz" });
    setRoute({ view: "quiz" });
  };

  const resumeQuiz = () => {
    const storedAnswers = getStoredAnswers();
    setAnswers(storedAnswers);
    setQuestionIndex(getResumeIndex(storedAnswers));
    syncHash({ view: "quiz" });
    setRoute({ view: "quiz" });
  };

  const currentQuestion = questions[questionIndex];
  const selectedOptionId = currentQuestion ? answers[currentQuestion.id] : undefined;
  const answeredCount = Object.keys(answers).length;
  const progress = currentQuestion
    ? Math.round(((questionIndex + 1) / questions.length) * 100)
    : 0;

  const submitAnswer = (optionId: string) => {
    if (!currentQuestion) {
      return;
    }

    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: optionId,
    };

    setAnswers(nextAnswers);
    writeStoredJson(QUIZ_STORAGE_KEY, nextAnswers);

    if (questionIndex === questions.length - 1) {
      const scores = calculateScores(questions, nextAnswers);
      const matchedResult = resolveResult(scores, results);
      const snapshot: ResultSnapshot = {
        code: matchedResult.code,
        scores,
      };

      setResultSnapshot(snapshot);
      writeStoredJson(RESULT_STORAGE_KEY, snapshot);
      syncHash({ view: "result", code: matchedResult.code });
      setRoute({ view: "result", code: matchedResult.code });
      return;
    }

    setQuestionIndex((index) => index + 1);
  };

  const goBack = () => {
    setQuestionIndex((index) => Math.max(index - 1, 0));
  };

  const activeResult =
    (route.view === "result" && getResultByCode(route.code)) ||
    (resultSnapshot ? getResultByCode(resultSnapshot.code) : undefined);
  const resultArtCode = activeResult?.artCode ?? activeResult?.code;
  const resultImagePath = resultArtCode
    ? `${import.meta.env.BASE_URL}archetypes/${resultArtCode.toLowerCase()}.png`
    : null;
  const resultThemeStyle = getResultThemeStyle(resultArtCode);

  return (
    <div className="app-shell" lang={locale}>
      <header className="site-bar">
        <button className="brand" type="button" onClick={goHome}>
          FEEDTYPE
        </button>
        <div className="site-meta">
          <p className="site-kicker">{copy.siteKicker(questions.length, results.length)}</p>
          <div className="locale-switch" role="group" aria-label={copy.languageSwitchLabel}>
            <button
              className={`locale-toggle ${locale === "en" ? "locale-toggle--active" : ""}`}
              type="button"
              onClick={() => setLocale("en")}
            >
              EN
            </button>
            <button
              className={`locale-toggle ${
                locale === "zh-CN" ? "locale-toggle--active" : ""
              }`}
              type="button"
              onClick={() => setLocale("zh-CN")}
            >
              中文
            </button>
          </div>
        </div>
      </header>

      {route.view === "landing" && (
        <main className="hero-grid">
          <section className="panel hero-panel">
            <span className="eyebrow">{copy.heroEyebrow}</span>
            <h1>{copy.heroTitle}</h1>
            <p className="lead">{copy.heroLead(results.length)}</p>

            <div className="button-row">
              <button className="button button--primary" type="button" onClick={startQuiz}>
                {copy.startQuiz}
              </button>
              {answeredCount > 0 && answeredCount < questions.length && (
                <button className="button button--secondary" type="button" onClick={resumeQuiz}>
                  {copy.resumeQuiz}
                </button>
              )}
            </div>

            <p className="disclaimer">{copy.disclaimer}</p>
          </section>

          <section className="axis-grid">
            {copy.axisCards.map((axisCard, index) => (
              <article key={axisCard.title} className="panel axis-card">
                <span className="axis-number">{String(index + 1).padStart(2, "0")}</span>
                <h2>{axisCard.title}</h2>
                <p>{axisCard.description}</p>
              </article>
            ))}
          </section>
        </main>
      )}

      {route.view === "quiz" && currentQuestion && (
        <main className="panel quiz-panel">
          <div className="quiz-meta">
            <div>
              <span className="eyebrow">{copy.questionLabel(questionIndex + 1)}</span>
              <p className="quiz-count">
                {copy.answeredCount(answeredCount, questions.length)}
              </p>
            </div>
            <p className="quiz-instruction">{copy.quizInstruction}</p>
          </div>

          <div className="progress-track" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <section className="question-panel">
            <h1>{pick(currentQuestion.prompt)}</h1>
            {currentQuestion.context && (
              <p className="question-context">{pick(currentQuestion.context)}</p>
            )}

            <div className="option-list">
              {currentQuestion.options.map((option) => (
                <button
                  key={`${currentQuestion.id}-${option.id}`}
                  className={`option-card ${
                    selectedOptionId === option.id ? "option-card--selected" : ""
                  }`}
                  type="button"
                  onClick={() => submitAnswer(option.id)}
                >
                  <span className="option-index">{option.id.toUpperCase()}</span>
                  <span>{pick(option.label)}</span>
                </button>
              ))}
            </div>
          </section>

          <div className="button-row button-row--spread">
            <button
              className="button button--secondary"
              type="button"
              onClick={goBack}
              disabled={questionIndex === 0}
            >
              {copy.back}
            </button>
            <button className="button button--ghost" type="button" onClick={goHome}>
              {copy.exit}
            </button>
          </div>
        </main>
      )}

      {route.view === "result" && (
        <main className="result-layout" style={resultThemeStyle}>
          {!activeResult || !resultSnapshot ? (
            <section className="panel empty-panel">
              <span className="eyebrow">{copy.emptyEyebrow}</span>
              <h1>{copy.emptyTitle}</h1>
              <p>{copy.emptyBody}</p>
              <button className="button button--primary" type="button" onClick={startQuiz}>
                {copy.startOver}
              </button>
            </section>
          ) : (
            <section className="panel result-card">
              <div className="result-hero">
                <section className="result-visual-panel">
                  <div className="character-art-stage">
                    <div className="character-art-frame">
                      {imageUnavailable ? (
                        <div className="character-art character-art--fallback">
                          {locale === "en"
                            ? "Character image is unavailable on this device."
                            : "当前设备未能加载这张角色图片。"}
                        </div>
                      ) : (
                        <img
                          className="character-art"
                          src={resultImagePath ?? undefined}
                          alt={copy.characterAlt(pick(activeResult.title))}
                          loading="eager"
                          onError={() => setImageUnavailable(true)}
                        />
                      )}
                    </div>
                  </div>
                </section>

                <section className="result-copy-panel">
                  <span className="eyebrow">{copy.resultEyebrow}</span>
                  <h1>{pick(activeResult.title)}</h1>
                  <p className="result-subtitle">{pick(activeResult.subtitle)}</p>
                  <p className="result-summary">{pick(activeResult.summary)}</p>

                  <blockquote className="result-quote">
                    {pick(activeResult.punchline)}
                  </blockquote>

                  <div className="tag-row">
                    {pick(activeResult.traits).map((trait) => (
                      <span key={trait} className="tag-chip">
                        {trait}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <section className="panel score-panel score-panel--embedded">
                <span className="eyebrow">{copy.feedProfileEyebrow}</span>
                <h2>{copy.scoreTitle}</h2>
                <p className="score-intro">{copy.scoreIntro(results.length)}</p>

                <div className="meter-list">
                  {dimensionKeys.map((dimension) => (
                    <div key={dimension} className="meter-row">
                      <div className="meter-head">
                        <span>{dimensionLabels[dimension]}</span>
                        <strong>{resultSnapshot.scores[dimension]}</strong>
                      </div>
                      <div className="meter-track" aria-hidden="true">
                        <div
                          className="meter-fill"
                          style={{ width: `${resultSnapshot.scores[dimension]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button className="button button--ghost button--full" type="button" onClick={goHome}>
                  {copy.backToLanding}
                </button>
              </section>
            </section>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
