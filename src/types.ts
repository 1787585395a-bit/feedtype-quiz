export type DimensionKey =
  | "postingStyle"
  | "socialEnergy"
  | "ironyLevel"
  | "conflictMode"
  | "delusionLevel";

export type Locale = "en" | "zh-CN";
export type Localized<T> = Record<Locale, T>;

export type DimensionScores = Record<DimensionKey, number>;

export type AnswerOption = {
  id: string;
  label: Localized<string>;
  weights: Partial<DimensionScores>;
};

export type Question = {
  id: string;
  prompt: Localized<string>;
  context?: Localized<string>;
  options: AnswerOption[];
};

export type ResultProfile = {
  code: string;
  title: Localized<string>;
  artCode?: string;
  subtitle: Localized<string>;
  vibe: Localized<string>;
  summary: Localized<string>;
  punchline: Localized<string>;
  traits: Localized<string[]>;
  shareText: Localized<string>;
  targets: DimensionScores;
};
