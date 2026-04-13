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
      postingStyle: 44,
      socialEnergy: 58,
      ironyLevel: 42,
      conflictMode: 16,
      delusionLevel: 84,
    },
  },
  {
    code: "DELU",
    title: text("DELU", "主角病王"),
    subtitle: text("Main character malware.", "人生自带电影旁白。"),
    vibe: text("Cinematic delulu with suspicious uptime.", "高在线率的主角滤镜。"),
    summary: text(
      "You are one of the rare people who can romanticize a grocery run into an origin story. Somewhere between cosmic delusion and premium self-branding, you convinced the universe to keep giving your random Tuesday background music.",
      "你的人生在你眼里没有日常，只有剧情。买杯咖啡像命运转折，晚回消息像宇宙埋线，别人随口夸你一句都够你脑补一个新人设赛季。你不是简单乐观，你是把自己的人生过成导演剪辑版。",
    ),
    punchline: text(
      "You are not delulu. You are aggressively in beta. Screenshot this and send it to the friend who keeps enabling your lore.",
      "你不是戏太多，你是天生自带电影旁白。发给那个天天给自己生活配 BGM 的朋友。",
    ),
    traits: list(
      [
        "romanticizes errands into plot",
        "hears one compliment and starts a new era",
        "treats coincidences like universe-sent trailers",
      ],
      [
        "把小事自动升格成命运节点",
        "别人一句夸奖就能进入新篇章",
        "最会把巧合脑补成宇宙暗示",
      ],
    ),
    shareText: text(
      "I got DELU on FEEDTYPE. Apparently my personal mythology has no adult supervision. Screenshot this and send it to the friend who keeps feeding my lore.",
      "我测出来是 主角病王。原来我的人生旁白根本没有人监管。发给那个一直在帮我加戏的朋友。",
    ),
    targets: {
      postingStyle: 74,
      socialEnergy: 72,
      ironyLevel: 14,
      conflictMode: 30,
      delusionLevel: 98,
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
      postingStyle: 56,
      socialEnergy: 34,
      ironyLevel: 95,
      conflictMode: 26,
      delusionLevel: 42,
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
      postingStyle: 82,
      socialEnergy: 56,
      ironyLevel: 48,
      conflictMode: 96,
      delusionLevel: 38,
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
      postingStyle: 16,
      socialEnergy: 22,
      ironyLevel: 56,
      conflictMode: 18,
      delusionLevel: 18,
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
      postingStyle: 78,
      socialEnergy: 94,
      ironyLevel: 62,
      conflictMode: 68,
      delusionLevel: 74,
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
      postingStyle: 62,
      socialEnergy: 62,
      ironyLevel: 38,
      conflictMode: 54,
      delusionLevel: 34,
    },
  },
  {
    code: "LURK",
    title: text("LURK", "潜水情报局"),
    subtitle: text("Silent analytics demon.", "不发声，但全网剧情都在你库里。"),
    vibe: text("Low-posting, high-surveillance luxury.", "低发帖高监控奢侈型。"),
    summary: text(
      "You are one of the rare creatures who can know every subplot without contributing a single pixel. You do not participate in the feed like a normal person; you audit it, file it, and emerge only when the room has already exposed itself.",
      "你看起来像是没参与，其实全网剧情你一条没落。别人还在热搜底下胡乱猜，你已经从朋友圈、评论区、点赞顺序和一堆边角料里拼完前因后果。你不抢麦，但你是最早知道真相的人。",
    ),
    punchline: text(
      "You don't miss tea. Tea files itself into your system. Screenshot this and send it to the friend who sees everything and says nothing until it matters.",
      "你不是潜水，你是在默默建情报网。发给那个永远先知道八卦但绝不第一时间出声的人。",
    ),
    traits: list(
      [
        "knows every breakup before the hard launch",
        "watches Stories like a silent intern of fate",
        "posts once a month and still stays informed",
      ],
      [
        "别人还没官宣你已经知道分手了",
        "刷动态像在做赛博情报整理",
        "自己发得少但从不信息落后",
      ],
    ),
    shareText: text(
      "I got LURK on FEEDTYPE. Apparently I'm not offline, just conducting surveillance. Screenshot this and send it to the friend who always knows the lore first.",
      "我测出来是 潜水情报局。原来我不是不在线，我是在静默监控。发给那个总是最先知道剧情的人。",
    ),
    targets: {
      postingStyle: 8,
      socialEnergy: 20,
      ironyLevel: 72,
      conflictMode: 12,
      delusionLevel: 24,
    },
  },
  {
    code: "SPIN",
    title: text("SPIN", "脑补编剧部"),
    subtitle: text("Narrative over-editing software.", "生活在你脑子里永远有分镜。"),
    vibe: text("Every minor event becomes premium lore.", "小事自动升级成长篇剧情。"),
    summary: text(
      "You are one of the rare people who can turn a normal Tuesday into a season arc with callbacks. Nothing stays small around you. A text is a signal, a delay is a chapter, and an accident is somehow the cold open.",
      "你的脑子几乎不会让一件事以“就这样”结束。别人眼里普通的一天，到你这儿会自动长出前情提要、伏笔和反转。你不是单纯爱想太多，你是习惯给生活加镜头语言。",
    ),
    punchline: text(
      "You don't overthink. You storyboard. Screenshot this and send it to the friend who can make a parking ticket sound spiritually important.",
      "你不是脑补，你是在给人生写分镜。发给那个连迟到都能讲出剧情张力的人。",
    ),
    traits: list(
      [
        "finds plot in every dumb coincidence",
        "rewrites tiny moments into cinematic lore",
        "says 'wait no because actually' before the spiral begins",
      ],
      [
        "最会从巧合里抠出剧情",
        "再小的事都会被你讲出电影感",
        "总能在一句“等会其实”后开出新支线",
      ],
    ),
    shareText: text(
      "I got SPIN on FEEDTYPE. Apparently my overthinking has a writers' room. Screenshot this and send it to the friend who narrates everything like a season finale.",
      "我测出来是 脑补编剧部。原来我的想太多已经拥有独立编剧团队。发给那个什么事都能讲成剧情的人。",
    ),
    targets: {
      postingStyle: 68,
      socialEnergy: 58,
      ironyLevel: 78,
      conflictMode: 44,
      delusionLevel: 90,
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
      postingStyle: 94,
      socialEnergy: 70,
      ironyLevel: 66,
      conflictMode: 42,
      delusionLevel: 58,
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
      postingStyle: 24,
      socialEnergy: 18,
      ironyLevel: 44,
      conflictMode: 38,
      delusionLevel: 12,
    },
  },
  {
    code: "REPL",
    title: text("REPL", "社交变色龙"),
    subtitle: text("Social mirror with premium uptime.", "你不是见人说人话，你是见场切频道。"),
    vibe: text("Charm that adapts faster than software.", "比软件更新更快的社交适配。"),
    summary: text(
      "You are one of the rare people who can enter any room and somehow become the exact right flavor of funny. Your danger is that people think you're effortless when actually your charisma is doing live customer support for the whole vibe.",
      "你进什么场就能切成什么频道，跟什么人说话都能迅速找到最合适的那一版自己。别人会觉得你很自然，但其实你是靠极强的社交感应力在实时调频。你不是讨好型，你是环境适配型。",
    ),
    punchline: text(
      "You don't people-please. You room-optimize. Screenshot this and send it to the friend who can match any table's frequency in under ten seconds.",
      "你不是见人说人话，你是见什么场就能自动上对味版本。发给那个去到哪都能很快混熟的人。",
    ),
    traits: list(
      [
        "changes tone flawlessly depending on the room",
        "knows how to rescue an awkward interaction",
        "makes everyone feel chosen for five minutes",
      ],
      [
        "跟谁说话都能秒切最合适的语气",
        "最会把快尬住的场子救回来",
        "总能让别人短暂感到自己很特别",
      ],
    ),
    shareText: text(
      "I got REPL on FEEDTYPE. Apparently my personality runs on adaptive software. Screenshot this and send it to the friend who can vibe with literally anyone.",
      "我测出来是 社交变色龙。原来我的人格底层是实时适配系统。发给那个和谁都能迅速对上频道的朋友。",
    ),
    targets: {
      postingStyle: 60,
      socialEnergy: 86,
      ironyLevel: 52,
      conflictMode: 20,
      delusionLevel: 48,
    },
  },
  {
    code: "NPCX",
    title: text("NPCX", "路人梗王"),
    subtitle: text("Background character, suspiciously iconic.", "平时像挂件，开口像彩蛋。"),
    vibe: text("Low-maintenance presence with hidden lore.", "存在感低配，笑点高配。"),
    summary: text(
      "You are one of the rare people who look chill enough to be background scenery and then randomly drop a line that resets the room. Your whole thing is acting like an NPC while secretly carrying enough inner plot to fuel three side quests.",
      "你平时的存在感可能不高，甚至容易被误判成路人挂件，但真正熟的人都知道你是那种一开口就能把全场笑翻的隐藏角色。你不是没内容，你是习惯把好东西憋到最后。",
    ),
    punchline: text(
      "You are not boring. You are selectively rendered. Screenshot this and send it to the friend who seems quiet until they suddenly say the funniest thing all year.",
      "你不是背景板，你是延迟加载的梗王。发给那个平时安静、开口就接管全场的人。",
    ),
    traits: list(
      [
        "coasts in silence until the perfect one-liner appears",
        "keeps the weirdest internal monologue fully private",
        "gets underestimated and kind of enjoys it",
      ],
      [
        "平时话不多，一开口就正中靶心",
        "脑内最离谱的内容永远不轻易外泄",
        "被低估的时候甚至还有点享受",
      ],
    ),
    shareText: text(
      "I got NPCX on FEEDTYPE. Apparently I'm background coded with illegal amounts of inner lore. Screenshot this and send it to the friend who is secretly the funniest in the room.",
      "我测出来是 路人梗王。原来我只是看起来像背景板，实际是隐藏笑点供应商。发给那个平时安静、其实最会接梗的朋友。",
    ),
    targets: {
      postingStyle: 14,
      socialEnergy: 34,
      ironyLevel: 84,
      conflictMode: 10,
      delusionLevel: 10,
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
      postingStyle: 74,
      socialEnergy: 64,
      ironyLevel: 12,
      conflictMode: 46,
      delusionLevel: 60,
    },
  },
  {
    code: "BAIT",
    title: text("BAIT", "赛博下饵机"),
    subtitle: text("Soft-launch fishing kit.", "你说随便发发，其实全是定向投喂。"),
    vibe: text("Engagement farming with fake innocence.", "装无辜的精准钓鱼。"),
    summary: text(
      "You are one of the rare people who can post something 'casual' that is obviously a trap for attention, replies, and very specific viewers. You pretend to be surprised every time the bait works, which is honestly your most toxic talent.",
      "你最会的不是发内容，而是下套。你嘴上说随便发发，实际谁该看到、谁会来问、谁会被钓出来，你心里早就排过一遍。最绝的是你每次还演得像真没想到有人会上钩。",
    ),
    punchline: text(
      "You are not subtle. You are strategic in lowercase. Screenshot this and send it to the friend who says 'random' right before dropping an obvious trap post.",
      "你不是随手发，你是在赛博下饵。发给那个每条朋友圈都像精心布置过的朋友。",
    ),
    traits: list(
      [
        "posts one loaded sentence and waits for pings",
        "acts accidental while aiming with both eyes open",
        "knows exactly who each Story is for",
      ],
      [
        "一句看似随意的话能钓出整串回复",
        "嘴上说随机，眼睛早就瞄准目标",
        "每条动态发出去前都知道是在给谁看",
      ],
    ),
    shareText: text(
      "I got BAIT on FEEDTYPE. Apparently my 'casual' posts are felony-level setup. Screenshot this and send it to the friend who keeps posting obvious traps.",
      "我测出来是 赛博下饵机。原来我那些“随便发发”的动态全是钓鱼现场。发给那个每条朋友圈都像有目标受众的朋友。",
    ),
    targets: {
      postingStyle: 88,
      socialEnergy: 52,
      ironyLevel: 70,
      conflictMode: 54,
      delusionLevel: 80,
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
      postingStyle: 46,
      socialEnergy: 78,
      ironyLevel: 36,
      conflictMode: 16,
      delusionLevel: 70,
    },
  },
];
