export type DimensionKey =
  | "postingStyle"
  | "socialEnergy"
  | "ironyLevel"
  | "conflictMode"
  | "delusionLevel";

export type DimensionScores = Record<DimensionKey, number>;

export type AnswerOption = {
  id: string;
  label: string;
  weights: Partial<DimensionScores>;
};

export type Question = {
  id: string;
  prompt: string;
  context?: string;
  options: AnswerOption[];
};

export type ResultProfile = {
  code: string;
  title: string;
  artCode?: string;
  subtitle: string;
  vibe: string;
  summary: string;
  punchline: string;
  traits: string[];
  shareText: string;
  targets: DimensionScores;
};
