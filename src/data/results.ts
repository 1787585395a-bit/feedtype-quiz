import type { Localized, ResultProfile } from "../types";

const text = (en: string, zhCN: string): Localized<string> => ({
  en,
  "zh-CN": zhCN,
});

const list = (en: string[], zhCN: string[]): Localized<string[]> => ({
  en,
  "zh-CN": zhCN,
});

export const results: ResultProfile[] = [
  {
    code: "AURA",
    title: text("AURA", "氛围钓王"),
    subtitle: text("Half a face, full social damage.", "半张图，够别人脑补一整季。"),
    vibe: text("Soft-launch weather system.", "半官宣气压带。"),
    summary: text(
      "You are one of the rare few who can turn one blurry Story into a full rumor cycle. You do not post updates like a civilian; you drop atmosphere, let the algorithm panic, and walk away like none of it was on purpose.",
      "你是那种只发半张图、半句废话，就能让别人把剧情脑补到大结局的人。你不靠高频营业，你靠氛围投毒。只要你一露出一点边角料，旁观者就会自动开始破案。",
    ),
    punchline: text(
      "You don't post content. You release evidence. Screenshot this and send it to the friend who keeps decoding your Stories.",
      "你不是在发动态，你是在投放证据。把这条甩给那个总爱研究你朋友圈的人。",
    ),
    traits: list(
      [
        "posts one blurred clue and vanishes",
        "soft-launches with coffee cups and elbows",
        "answers curiosity with one suspicious emoji",
      ],
      [
        "半张图就能钓出一整套猜测",
        "官宣永远只露边角料",
        "别人追问时只回一个表情",
      ],
    ),
    shareText: text(
      "I got AURA on FEEDTYPE. Apparently I release evidence, not updates. Screenshot this and send it to the friend who keeps decoding my Stories.",
      "我测出来是 氛围钓王。原来我不是发动态，我是在投放证据。发给那个总在研究我朋友圈的朋友。",
    ),
    targets: {
      postingStyle: 66,
      socialEnergy: 61,
      ironyLevel: 19,
      conflictMode: 49,
      delusionLevel: 64,
    },
  },
  {
    code: "COPE",
    title: text("COPE", "嘴硬文豪"),
    subtitle: text("Lore recycling unit.", "情绪先排版，再发出来。"),
    vibe: text("Irony as emotional sunscreen.", "阴阳语气版情绪防晒。"),
    summary: text(
      "You are one of the rare demons who can turn a breakdown into a polished take before the feeling even lands. Your coping style is basically narrative composting: shame goes in, commentary comes out, and somehow it still gets likes.",
      "你的情绪不会直接散在地上，它会先被你打磨成一条像样的表达。尴尬能变梗，崩溃能变文案，内耗到你这儿也得先排个版。你不是不难受，你只是习惯把难受做成可发布版本。",
    ),
    punchline: text(
      "You didn't spiral. You produced commentary. Screenshot this and send it to the friend who writes captions like post-credit scenes.",
      "你不是嘴硬，你是在给情绪做精修。发给那个总把崩溃写得像专栏的人。",
    ),
    traits: list(
      [
        "turns embarrassment into hot takes",
        "writes captions like season finales",
        "calls a spiral 'just a thought'",
      ],
      [
        "尴尬第一时间先被你做成段子",
        "情绪一起伏就会长出文案感",
        "明明在难受却说只是有点想法",
      ],
    ),
    shareText: text(
      "I got COPE on FEEDTYPE. Apparently my coping mechanism has formatting. Screenshot this and send it to the friend who keeps subtweeting their emotions.",
      "我测出来是 嘴硬文豪。原来我的 coping mechanism 自带排版。发给那个总把情绪写成文案的朋友。",
    ),
    targets: {
      postingStyle: 48,
      socialEnergy: 43,
      ironyLevel: 45,
      conflictMode: 39,
      delusionLevel: 40,
    },
  },
  {
    code: "CRSH",
    title: text("CRSH", "评论战神"),
    subtitle: text("Comment section bossfight.", "平时冷静，下场像开庭。"),
    vibe: text("Receipts with boss music.", "证据链自带战歌。"),
    summary: text(
      "You are one of the rare people whose 'I'm over it' still sounds like a countdown timer. You can be peaceful for weeks, then suddenly materialize with timestamps, screenshots, and a tone that makes the whole room sit up straight.",
      "你平时未必最爱开麦，但一旦真的下场，气氛会立刻变成审判现场。别人靠情绪输出，你靠证据、时间线和一句比一句更有压迫感的语气。你不是天天战斗，你只是很擅长在必要时把场子接管。",
    ),
    punchline: text(
      "You don't start drama. You arrive when the drama needs adult supervision. Screenshot this and send it to the friend who's one bad take away from a TED Talk with claws.",
      "你不是爱吵，你是评论区需要成年人时才会出现的那个。发给那个平时冷静、一开口就全场闭嘴的人。",
    ),
    traits: list(
      [
        "says 'leave it' then opens Notes",
        "types paragraphs in full legal grammar",
        "keeps receipts like a museum archive",
      ],
      [
        "嘴上说算了，手已经点开备忘录",
        "对线像写结案陈词",
        "证据留得比网盘还完整",
      ],
    ),
    shareText: text(
      "I got CRSH on FEEDTYPE. Apparently my peace has a patch note. Screenshot this and send it to the friend who is always one bad opinion away from crashing out.",
      "我测出来是 评论战神。原来我不是发火，我是给评论区做秩序维护。发给那个平时不说话、一说话就像开庭的朋友。",
    ),
    targets: {
      postingStyle: 61,
      socialEnergy: 55,
      ironyLevel: 21,
      conflictMode: 71,
      delusionLevel: 52,
    },
  },
  {
    code: "MUTE",
    title: text("MUTE", "已读贵族"),
    subtitle: text("Seen-zone royalty.", "回复慢，但存在感很贵。"),
    vibe: text("Premium low-access energy.", "低访问权限高级感。"),
    summary: text(
      "You are one of the rare people who made being unavailable look like a luxury product. While everyone else is livestreaming every emotional software bug, you move like a private beta link with a waiting list.",
      "你最大的杀伤力不是说了什么，而是你没说什么。别人一天发八条，你半个月冒个泡也还是有人盯着。你回消息慢、上线低调、存在感却一点不低，这种低访问权限本身就是一种高配魅力。",
    ),
    punchline: text(
      "You are not ghosting. You are curating the experience. Screenshot this and send it to the friend who replies in four business days and still runs the room.",
      "你不是失踪，你是在控量。发给那个回消息像皇室批奏折的人。",
    ),
    traits: list(
      [
        "reads everything and replies on moonlight time",
        "posts nothing but knows all the lore",
        "treats do-not-disturb like sacred law",
      ],
      [
        "看完消息但会按自己的天象回复",
        "自己几乎不发却什么都知道",
        "把免打扰活成了人生原则",
      ],
    ),
    shareText: text(
      "I got MUTE on FEEDTYPE. Apparently my response time is now a personality trait. Screenshot this and send it to the friend who treats read receipts like performance art.",
      "我测出来是 已读贵族。原来我的回复速度已经进化成一种人格标签。发给那个回消息像批奏折的朋友。",
    ),
    targets: {
      postingStyle: 35,
      socialEnergy: 34,
      ironyLevel: 25,
      conflictMode: 39,
      delusionLevel: 35,
    },
  },
  {
    code: "COOK",
    title: text("COOK", "群聊点火器"),
    subtitle: text("Group chat arsonist.", "局面还正常时你最危险。"),
    vibe: text("Social chaos with excellent pacing.", "节奏极好的社交事故。"),
    summary: text(
      "You are one of the rare few who can turn 'anyone around tonight?' into a three-location legend by midnight. You do not join the vibe; you overclock it until somebody loses a wallet, gains a crush, or both.",
      "你最擅长的不是参加热闹，而是把原本还算正常的局面推成事故现场。一个“听我说完”能让饭局升级成夜间连续剧，一个想法能把群聊炸出几十条新消息。你是风险，也是今晚最好玩的部分。",
    ),
    punchline: text(
      "You don't organize chaos. You franchise it. Screenshot this and send it to the friend who says 'hear me out' right before making the night worse and better.",
      "你不是在组局，你是在点火。发给那个一开口就让今晚变得更乱也更值的人。",
    ),
    traits: list(
      [
        "turns a dinner into a three-location saga",
        "sends 'hear me out' before social damage",
        "treats the group chat like a live-fire lab",
      ],
      [
        "一顿饭能被你做成三幕夜间剧情",
        "最爱用一句“听我说完”升级风险",
        "把群聊当成活体实验场",
      ],
    ),
    shareText: text(
      "I got COOK on FEEDTYPE. Apparently I am a public safety concern for group chats. Screenshot this and send it to the friend who keeps escalating the plan.",
      "我测出来是 群聊点火器。原来我是群聊里的公共安全隐患。发给那个总能把普通聚会升级成事故现场的朋友。",
    ),
    targets: {
      postingStyle: 39,
      socialEnergy: 41,
      ironyLevel: 17,
      conflictMode: 63,
      delusionLevel: 39,
    },
  },
  {
    code: "CTRL",
    title: text("CTRL", "总控大脑"),
    subtitle: text("Calendar cartel energy.", "嘴上随便，手里已经排完流程。"),
    vibe: text("Operational charisma with tabs open.", "开着十个标签页的掌控魅力。"),
    summary: text(
      "You are one of the rare people who can make planning look like seduction. While everyone else is free-falling into bad logistics, you build the spreadsheet, lock the table, and somehow make control issues read as taste.",
      "别人还在说“随便都行”，你已经把时间、地点、备选方案和收尾路径都想完了。你不是控制欲过强，你只是天然受不了低效和烂尾。更离谱的是，你连把局面控住这件事都能做得很体面。",
    ),
    punchline: text(
      "You are not bossy. You are the human version of a working system. Screenshot this and send it to the friend who says 'casual' and then sends an itinerary.",
      "你不是爱管，你是整场活动唯一在认真运营的人。发给那个嘴上说随便、手上已经排完流程的人。",
    ),
    traits: list(
      [
        "turns vague plans into clean timelines",
        "sends actual options instead of vibes",
        "acts chill while managing the whole room",
      ],
      [
        "最会把烂尾计划拉回正轨",
        "给的永远是方案，不是模糊情绪",
        "明明在控全场还看起来很淡定",
      ],
    ),
    shareText: text(
      "I got CTRL on FEEDTYPE. Apparently my control issues now have production value. Screenshot this and send it to the friend who keeps the plan from dying.",
      "我测出来是 总控大脑。原来我的控制欲已经开始具备制作价值。发给那个总能把烂尾计划救活的朋友。",
    ),
    targets: {
      postingStyle: 61,
      socialEnergy: 55,
      ironyLevel: 40,
      conflictMode: 52,
      delusionLevel: 51,
    },
  },
  {
    code: "FEED",
    title: text("FEED", "算法饲养员"),
    subtitle: text("Algorithm hobbyist.", "生活还没发，你已经在想分发。"),
    vibe: text("Public diary with suspiciously good timing.", "像日记，其实像运营。"),
    summary: text(
      "You are one of the rare people who somehow understand the feed like it owes you backend access. You know when to post, what to tease, and how to package a regular day so it looks like an event with sponsorship potential.",
      "你对内容的感觉已经不是品味问题，而是几乎带点职业病。什么时候发、发哪张、怎么排、怎么二次投放，你比平台还敏感。别人发的是生活，你发的是可分发版本的生活。",
    ),
    punchline: text(
      "You don't chase attention. You train it. Screenshot this and send it to the friend who posts like the algorithm is a situationship.",
      "你不是懂发内容，你是会养算法。发给那个连随手一发都像带着运营策略的人。",
    ),
    traits: list(
      [
        "thinks in captions, covers, and timing windows",
        "can sense flop energy before publish",
        "repurposes one moment into three formats",
      ],
      [
        "脑子里永远同时在想封面、文案和发布时间",
        "内容还没发你就能闻到扑街味",
        "一个瞬间能被你拆成三种版本继续投喂",
      ],
    ),
    shareText: text(
      "I got FEED on FEEDTYPE. Apparently I treat the algorithm like livestock. Screenshot this and send it to the friend who could monetize a coffee run.",
      "我测出来是 算法饲养员。原来我对平台的态度已经接近人工喂养。发给那个连买咖啡都像在做内容分发的朋友。",
    ),
    targets: {
      postingStyle: 59,
      socialEnergy: 40,
      ironyLevel: 22,
      conflictMode: 53,
      delusionLevel: 47,
    },
  },
  {
    code: "LOCK",
    title: text("LOCK", "边界防火墙"),
    subtitle: text("Emotional paywall enabled.", "你不是没内容，你只是不给路人看完整版。"),
    vibe: text("Restricted access with no free trial.", "无试用期的访问限制。"),
    summary: text(
      "You are one of the rare people who turned boundaries into an aesthetic. While everyone else is leaking context for free, you operate like premium software: no demo, no preview, no update unless the user has earned access.",
      "你不是没故事，你只是不给路人看完整版。别人越想打探，你越会把话说得刚刚好，多一个字都不送。你把边界感用成了一种风格，所以别人越猜越上头。",
    ),
    punchline: text(
      "You are not hard to read. You're just not a public document. Screenshot this and send it to the friend who gives out exactly one clue every fiscal quarter.",
      "你不是难接近，你只是没给所有人同一个权限。发给那个永远只透露三分之一真相的人。",
    ),
    traits: list(
      [
        "answers personal questions like a lawyer",
        "lets people guess instead of clarifying",
        "can kill momentum with one calm sentence",
      ],
      [
        "别人越想套话你越像律师",
        "最擅长让大家自己去猜",
        "一句平静的话就能把场面按停",
      ],
    ),
    shareText: text(
      "I got LOCK on FEEDTYPE. Apparently my boundaries now have licensing terms. Screenshot this and send it to the friend who lives behind a paywall.",
      "我测出来是 边界防火墙。原来我的边界感已经写进了使用协议。发给那个永远不公开完整版的朋友。",
    ),
    targets: {
      postingStyle: 46,
      socialEnergy: 45,
      ironyLevel: 37,
      conflictMode: 59,
      delusionLevel: 39,
    },
  },
  {
    code: "IRLY",
    title: text("IRLY", "真话外放器"),
    subtitle: text("Oversharing without witness protection.", "情绪一上线就想公开测试。"),
    vibe: text("Sincere posting with mild public risk.", "高真诚度伴随轻度社死风险。"),
    summary: text(
      "You are one of the rare people who can post something honest enough to concern HR and still make it look hot. Your issue is not that you feel too much. Your issue is that the timeline gets a front-row seat the second the feeling develops a pulse.",
      "你的问题不是太真诚，而是真诚一来就直接联网。别人还在犹豫这话能不能发，你已经把情绪、来龙去脉和自我剖析一起端出来了。你是那种容易让人觉得“好真”，也容易让自己第二天后悔的人。",
    ),
    punchline: text(
      "You don't vague-post. You emotionally open-source. Screenshot this and send it to the friend who tells the truth online like taxes aren't real.",
      "你不是爱说太多，你是情绪一上线就自动公测。发给那个总把真心话先发出去再慢慢复盘的人。",
    ),
    traits: list(
      [
        "posts the feeling before the lesson arrives",
        "accidentally turns vulnerability into branding",
        "forgets the internet is searchable until later",
      ],
      [
        "感受刚出现就会想立刻说出来",
        "总能把脆弱发成一种个人气质",
        "往往要第二天才想起互联网会留痕",
      ],
    ),
    shareText: text(
      "I got IRLY on FEEDTYPE. Apparently my honesty has no safety rails. Screenshot this and send it to the friend who posts first and reflects later.",
      "我测出来是 真话外放器。原来我的真诚没有护栏。发给那个总是先发真心话再慢慢后悔的朋友。",
    ),
    targets: {
      postingStyle: 44,
      socialEnergy: 53,
      ironyLevel: 21,
      conflictMode: 50,
      delusionLevel: 50,
    },
  },
  {
    code: "GLOW",
    title: text("GLOW", "低耗发光体"),
    subtitle: text("Accidental icon behavior.", "你不怎么用力，但别人很容易上头。"),
    vibe: text("Charisma leak with zero formal training.", "松弛感外溢型魅力泄露。"),
    summary: text(
      "You are one of the rare people who can do almost nothing and still leave the room looking under-edited by comparison. The annoying part is that your best moments often look accidental, which makes people project a whole celestial management team onto your existence.",
      "你很少显得用力，但偏偏这种不怎么用力的状态最有杀伤力。别人认真经营半天才能有的存在感，你靠自然出场就能拿到。你不是高调型主角，你是那种站着不动也会被投射一堆光环的人。",
    ),
    punchline: text(
      "You are not trying too hard. Everyone else is trying near you. Screenshot this and send it to the friend who low-effort clears the entire function.",
      "你不是刻意发光，是别人站你旁边自动显得没开灯。发给那个松松垮垮也很能打的人。",
    ),
    traits: list(
      [
        "wins the room without obvious labor",
        "looks casual in ways that feel expensive",
        "creates crushes by existing at medium volume",
      ],
      [
        "不需要明显用力也能赢存在感",
        "明明很松弛却总带点贵气",
        "只是正常待着也容易让人上头",
      ],
    ),
    shareText: text(
      "I got GLOW on FEEDTYPE. Apparently my main hobby is low-effort intimidation. Screenshot this and send it to the friend who clears the room by accident.",
      "我测出来是 低耗发光体。原来我最大的本事是没怎么用力就赢了。发给那个明明很松弛却总能吸走视线的朋友。",
    ),
    targets: {
      postingStyle: 54,
      socialEnergy: 46,
      ironyLevel: 25,
      conflictMode: 34,
      delusionLevel: 48,
    },
  },
];
