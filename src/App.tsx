import { useEffect, useState, type CSSProperties } from "react";
import { questions } from "./data/questions";
import { results } from "./data/results";
import {
  calculateScores,
  dimensionKeys,
  dimensionLabels,
  resolveResult,
} from "./lib/scoring";
import type { DimensionScores, ResultProfile } from "./types";

const QUIZ_STORAGE_KEY = "feedtype.quiz.answers";
const RESULT_STORAGE_KEY = "feedtype.quiz.result";

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
  const resultImagePath = activeResult
    ? `${import.meta.env.BASE_URL}archetypes/${activeResult.code.toLowerCase()}.png`
    : null;
  const resultThemeStyle = getResultThemeStyle(activeResult?.code);

  return (
    <div className="app-shell">
      <header className="site-bar">
        <button className="brand" type="button" onClick={goHome}>
          FEEDTYPE
        </button>
        <p className="site-kicker">internet type audit / 28 questions / for fun only</p>
      </header>

      {route.view === "landing" && (
        <main className="hero-grid">
          <section className="panel hero-panel">
            <span className="eyebrow">Built for Stories, screenshots, and selective oversharing</span>
            <h1>Find out what kind of internet menace you are.</h1>
            <p className="lead">
              FEEDTYPE is a fast meme-native personality quiz shaped around posting
              instinct, social battery, irony armor, conflict temperature, and main-character
              levels.
            </p>

            <div className="button-row">
              <button className="button button--primary" type="button" onClick={startQuiz}>
                Start the audit
              </button>
              {answeredCount > 0 && answeredCount < questions.length && (
                <button className="button button--secondary" type="button" onClick={resumeQuiz}>
                  Resume draft
                </button>
              )}
            </div>

            <p className="disclaimer">For fun only. Not psychological advice.</p>
          </section>

          <section className="axis-grid">
            <article className="panel axis-card">
              <span className="axis-number">01</span>
              <h2>Posting Instinct</h2>
              <p>From stealth mode to full-time feed maintenance.</p>
            </article>
            <article className="panel axis-card">
              <span className="axis-number">02</span>
              <h2>Social Battery</h2>
              <p>From selective appearances to active scene management.</p>
            </article>
            <article className="panel axis-card">
              <span className="axis-number">03</span>
              <h2>Irony Armor</h2>
              <p>From sincere posting to emotionally protected bit-making.</p>
            </article>
            <article className="panel axis-card">
              <span className="axis-number">04</span>
              <h2>Conflict Temperature</h2>
              <p>From silent blocking to timeline-ready intervention.</p>
            </article>
            <article className="panel axis-card">
              <span className="axis-number">05</span>
              <h2>Main Character Levels</h2>
              <p>From grounded realism to premium narrative projection.</p>
            </article>
          </section>
        </main>
      )}

      {route.view === "quiz" && currentQuestion && (
        <main className="panel quiz-panel">
          <div className="quiz-meta">
            <div>
              <span className="eyebrow">Question {questionIndex + 1}</span>
              <p className="quiz-count">
                {answeredCount} answered / {questions.length} total
              </p>
            </div>
            <p className="quiz-instruction">
              Pick your default move, not your most admirable one.
            </p>
          </div>

          <div className="progress-track" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <section className="question-panel">
            <h1>{currentQuestion.prompt}</h1>

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
                  <span>{option.label}</span>
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
              Back
            </button>
            <button className="button button--ghost" type="button" onClick={goHome}>
              Exit
            </button>
          </div>
        </main>
      )}

      {route.view === "result" && (
        <main className="result-layout" style={resultThemeStyle}>
          {!activeResult || !resultSnapshot ? (
            <section className="panel empty-panel">
              <span className="eyebrow">No active result</span>
              <h1>The result card needs a completed run.</h1>
              <p>Start a new quiz to generate a fresh score profile and archetype.</p>
              <button className="button button--primary" type="button" onClick={startQuiz}>
                Start over
              </button>
            </section>
          ) : (
            <>
              <section className="panel result-card">
                <div className="result-hero">
                  <section className="result-visual-panel">
                    <div className="character-art-stage">
                      <div className="character-art-frame">
                        {imageUnavailable ? (
                          <div className="character-art character-art--fallback">
                            Character image not generated on this machine yet.
                          </div>
                        ) : (
                          <img
                            className="character-art"
                            src={resultImagePath ?? undefined}
                            alt={`${activeResult.title} character render`}
                            loading="eager"
                            onError={() => setImageUnavailable(true)}
                          />
                        )}
                      </div>
                    </div>
                  </section>

                  <section className="result-copy-panel">
                    <span className="eyebrow">Matched Archetype</span>
                    <h1>{activeResult.title}</h1>
                    <p className="result-subtitle">{activeResult.subtitle}</p>
                    <p className="result-summary">{activeResult.summary}</p>

                    <blockquote className="result-quote">{activeResult.punchline}</blockquote>

                    <div className="tag-row">
                      {activeResult.traits.map((trait) => (
                        <span key={trait} className="tag-chip">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>

                <section className="panel score-panel score-panel--embedded">
                  <span className="eyebrow">Your feed profile</span>
                  <h2>Five-axis readout</h2>
                  <p className="score-intro">
                    This archetype is matched against 14 profiles using normalized scores across
                    the quiz&apos;s five behavior axes.
                  </p>

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

                  <button
                    className="button button--ghost button--full"
                    type="button"
                    onClick={goHome}
                  >
                    Back to landing
                  </button>
                </section>
              </section>
            </>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
