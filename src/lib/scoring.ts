import type { DimensionKey, DimensionScores, Question, ResultProfile } from "../types";

export const dimensionKeys: DimensionKey[] = [
  "postingStyle",
  "socialEnergy",
  "ironyLevel",
  "conflictMode",
  "delusionLevel",
];

export const dimensionLabels: Record<DimensionKey, string> = {
  postingStyle: "Posting Instinct",
  socialEnergy: "Social Battery",
  ironyLevel: "Irony Armor",
  conflictMode: "Conflict Temperature",
  delusionLevel: "Main Character Levels",
};

export const makeZeroScores = (): DimensionScores => ({
  postingStyle: 0,
  socialEnergy: 0,
  ironyLevel: 0,
  conflictMode: 0,
  delusionLevel: 0,
});

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

export const calculateScoreBounds = (
  questionBank: Question[],
): { min: DimensionScores; max: DimensionScores } => {
  const min = makeZeroScores();
  const max = makeZeroScores();

  for (const question of questionBank) {
    for (const dimension of dimensionKeys) {
      const weights = question.options.map(
        (answer) => answer.weights[dimension] ?? 0,
      );
      min[dimension] += Math.min(...weights);
      max[dimension] += Math.max(...weights);
    }
  }

  return { min, max };
};

export const calculateScores = (
  questionBank: Question[],
  answers: Record<string, string>,
): DimensionScores => {
  const raw = makeZeroScores();

  for (const question of questionBank) {
    const selected = answers[question.id];
    const option = question.options.find((choice) => choice.id === selected);

    if (!option) {
      continue;
    }

    for (const dimension of dimensionKeys) {
      raw[dimension] += option.weights[dimension] ?? 0;
    }
  }

  const bounds = calculateScoreBounds(questionBank);
  const normalized = makeZeroScores();

  for (const dimension of dimensionKeys) {
    const min = bounds.min[dimension];
    const max = bounds.max[dimension];
    const range = max - min;

    if (range === 0) {
      normalized[dimension] = 50;
      continue;
    }

    const shifted = ((raw[dimension] - min) / range) * 100;
    normalized[dimension] = Math.round(clamp(shifted, 0, 100));
  }

  return normalized;
};

export const resolveResult = (
  scores: DimensionScores,
  profiles: ResultProfile[],
): ResultProfile => {
  let bestProfile = profiles[0];
  let smallestDistance = Number.POSITIVE_INFINITY;

  for (const profile of profiles) {
    const distance = dimensionKeys.reduce((total, dimension) => {
      const delta = scores[dimension] - profile.targets[dimension];
      return total + delta * delta;
    }, 0);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      bestProfile = profile;
    }
  }

  return bestProfile;
};
