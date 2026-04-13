import type { DimensionKey, Locale } from "../types";

type AxisCardCopy = {
  title: string;
  description: string;
};

type UiCopy = {
  languageSwitchLabel: string;
  siteKicker: (questionCount: number, resultCount: number) => string;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: (resultCount: number) => string;
  startQuiz: string;
  resumeQuiz: string;
  disclaimer: string;
  axisCards: AxisCardCopy[];
  questionLabel: (index: number) => string;
  answeredCount: (answered: number, total: number) => string;
  quizInstruction: string;
  back: string;
  exit: string;
  emptyEyebrow: string;
  emptyTitle: string;
  emptyBody: string;
  startOver: string;
  resultEyebrow: string;
  feedProfileEyebrow: string;
  scoreTitle: string;
  scoreIntro: (resultCount: number) => string;
  backToLanding: string;
  characterAlt: (title: string) => string;
};

export const dimensionLabelsByLocale: Record<Locale, Record<DimensionKey, string>> = {
  en: {
    postingStyle: "Posting Instinct",
    socialEnergy: "Social Battery",
    ironyLevel: "Irony Armor",
    conflictMode: "Conflict Temperature",
    delusionLevel: "Main Character Levels",
  },
  "zh-CN": {
    postingStyle: "发帖本能",
    socialEnergy: "社交电量",
    ironyLevel: "阴阳防御",
    conflictMode: "开麦烈度",
    delusionLevel: "主角滤镜",
  },
};

export const uiCopy: Record<Locale, UiCopy> = {
  en: {
    languageSwitchLabel: "Switch language",
    siteKicker: (questionCount, resultCount) =>
      `internet role audit / ${questionCount} questions / ${resultCount} viral types`,
    heroEyebrow: "A fast internet personality quiz",
    heroTitle: "Find your internet role.",
    heroLead: (resultCount) =>
      `FEEDTYPE sorts you into ${resultCount} meme-coded internet identities using posting instinct, social battery, irony armor, conflict temperature, and main-character levels.`,
    startQuiz: "Start the audit",
    resumeQuiz: "Resume draft",
    disclaimer: "For fun only. Not psychological advice.",
    axisCards: [
      {
        title: "Posting Instinct",
        description: "From stealth mode to full-time feed maintenance.",
      },
      {
        title: "Social Battery",
        description: "From selective appearances to active scene management.",
      },
      {
        title: "Irony Armor",
        description: "From sincere posting to emotionally protected bit-making.",
      },
      {
        title: "Conflict Temperature",
        description: "From silent blocking to timeline-ready intervention.",
      },
      {
        title: "Main Character Levels",
        description: "From grounded realism to premium narrative projection.",
      },
    ],
    questionLabel: (index) => `Question ${index}`,
    answeredCount: (answered, total) => `${answered} answered / ${total} total`,
    quizInstruction: "Pick your first reflex, not your PR-safe answer.",
    back: "Back",
    exit: "Exit",
    emptyEyebrow: "No active result",
    emptyTitle: "The result card needs a completed run.",
    emptyBody: "Start a new quiz to generate a fresh score profile and internet role.",
    startOver: "Start over",
    resultEyebrow: "Your result",
    feedProfileEyebrow: "Your feed profile",
    scoreTitle: "Five-axis readout",
    scoreIntro: (resultCount) =>
      `This result is matched against ${resultCount} viral types using normalized scores across the quiz's five behavior axes.`,
    backToLanding: "Back to landing",
    characterAlt: (title) => `${title} character render`,
  },
  "zh-CN": {
    languageSwitchLabel: "切换语言",
    siteKicker: (questionCount, resultCount) =>
      `互联网角色测评 / ${questionCount} 道题 / ${resultCount} 种赛博人设`,
    heroEyebrow: "一套中文互联网人格测试",
    heroTitle: "找到你的互联网角色。",
    heroLead: (resultCount) =>
      `FEEDTYPE 会根据你的发帖本能、社交电量、阴阳防御、开麦烈度和主角滤镜，把你归进 ${resultCount} 种中文互联网角色。`,
    startQuiz: "开始测试",
    resumeQuiz: "继续答题",
    disclaimer: "仅供娱乐，不构成任何心理建议。",
    axisCards: [
      {
        title: "发帖本能",
        description: "从潜水围观到高频营业。",
      },
      {
        title: "社交电量",
        description: "从选择性露面到主动控场。",
      },
      {
        title: "阴阳防御",
        description: "从真诚外放到情绪套壳。",
      },
      {
        title: "开麦烈度",
        description: "从默默拉黑到评论区下场。",
      },
      {
        title: "主角滤镜",
        description: "从现实模式到人生自带剧情感。",
      },
    ],
    questionLabel: (index) => `第 ${index} 题`,
    answeredCount: (answered, total) => `已答 ${answered} / 共 ${total} 题`,
    quizInstruction: "选第一反应，不要选你最体面的答案。",
    back: "上一题",
    exit: "退出",
    emptyEyebrow: "暂无结果",
    emptyTitle: "你还没有生成结果。",
    emptyBody: "先完成一轮测试，再回来查看你的互联网角色。",
    startOver: "重新开始",
    resultEyebrow: "你的结果",
    feedProfileEyebrow: "你的五维画像",
    scoreTitle: "五轴读数",
    scoreIntro: (resultCount) =>
      `系统会根据五个行为维度的归一化分数，在 ${resultCount} 种互联网角色中匹配出最像你的那一个。`,
    backToLanding: "返回首页",
    characterAlt: (title) => `${title} 角色插图`,
  },
};
