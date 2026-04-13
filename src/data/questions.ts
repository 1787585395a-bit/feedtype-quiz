import type { AnswerOption, DimensionScores, Localized, Question } from "../types";

const text = (en: string, zhCN: string): Localized<string> => ({
  en,
  "zh-CN": zhCN,
});

const option = (
  id: string,
  label: Localized<string>,
  weights: Partial<DimensionScores>,
): AnswerOption => ({
  id,
  label,
  weights,
});

export const questions: Question[] = [
  {
    id: "story-speedrun",
    prompt: text(
      "Your situationship watches your Story in 11 seconds. Your next move?",
      "你那条很像在内涵某人的朋友圈，暧昧对象 11 秒内就看了。你下一步？",
    ),
    options: [
      option("a", text("Do nothing. God and the archive saw it.", "不动。天知地知相册也知。"), {
        postingStyle: -1,
        socialEnergy: -1,
        conflictMode: -1,
        delusionLevel: -1,
      }),
      option(
        "b",
        text(
          "Send it to one friend with 'interesting.'",
          "立刻甩给一个最懂你的人：你说他这是什么意思。",
        ),
        {
          socialEnergy: 1,
          ironyLevel: 1,
          delusionLevel: 1,
        },
      ),
      option(
        "c",
        text(
          "Post a second Story that is somehow even more targeted.",
          "马上再发一条，更像冲着他去的。",
        ),
        {
          postingStyle: 2,
          delusionLevel: 2,
        },
      ),
      option(
        "d",
        text(
          "Turn the group chat into a forensic lab immediately.",
          "直接拉起群聊分析会，当场开破案模式。",
        ),
        {
          postingStyle: 1,
          socialEnergy: 2,
          delusionLevel: 1,
        },
      ),
    ],
  },
  {
    id: "timeline-war-crime",
    prompt: text(
      "A mutual posts a take so bad it wrinkles the timeline.",
      "某个互关发了个离谱观点，离谱到能把评论区拧成麻花。你会？",
    ),
    options: [
      option("a", text("Mute and scroll. Peace is still free.", "静音划走。命重要，平静也重要。"), {
        socialEnergy: -1,
        conflictMode: -2,
      }),
      option(
        "b",
        text(
          "Subtweet the phenomenon, not the person.",
          "不点名发条阴阳怪气的动态，让懂的人自己对号入座。",
        ),
        {
          postingStyle: 1,
          ironyLevel: 2,
          conflictMode: -1,
        },
      ),
      option(
        "c",
        text(
          "Reply with 'be serious' and a clean receipt trail.",
          "正面回一句“别太离谱”，顺手把逻辑摆清楚。",
        ),
        {
          postingStyle: 1,
          conflictMode: 2,
        },
      ),
      option(
        "d",
        text(
          "Turn it into a room-wide event because why waste a disaster?",
          "把这事直接做成全场话题，灾难既然来了就别浪费。",
        ),
        {
          postingStyle: 1,
          socialEnergy: 1,
          conflictMode: 1,
          delusionLevel: 1,
        },
      ),
    ],
  },
  {
    id: "soft-launch-doctrine",
    prompt: text(
      "You're about to soft-launch someone. What actually gets posted?",
      "你准备半官宣一个人，到底怎么发？",
    ),
    options: [
      option("a", text("Nothing. Privacy is my hottest angle.", "不发。隐私本身就是最高级滤镜。"), {
        postingStyle: -2,
        delusionLevel: -1,
      }),
      option(
        "b",
        text("One blurry hand and zero explanation.", "只发一只手或一个背影，不解释。"),
        {
          postingStyle: 1,
          delusionLevel: 1,
        },
      ),
      option(
        "c",
        text(
          "A caption that implies fate has me on notifications.",
          "配一句很像命中注定的文案，懂的人自然懂。",
        ),
        {
          postingStyle: 1,
          socialEnergy: 1,
          delusionLevel: 2,
        },
      ),
      option(
        "d",
        text(
          "A reveal arc. This is not a post, it's rollout.",
          "连铺垫节奏和发布时间都想好了，这不是发帖，是做局。",
        ),
        {
          postingStyle: 2,
          socialEnergy: 1,
          delusionLevel: 2,
        },
      ),
    ],
  },
  {
    id: "group-chat-cpr",
    prompt: text(
      "The group chat is dead and the plan is rotting. What do you do?",
      "群里组局半天定不下来，计划已经快烂尾了。你会？",
    ),
    options: [
      option(
        "a",
        text(
          "React once and disappear before leadership finds me.",
          "点个表情证明自己看到了，然后继续装死。",
        ),
        {
          socialEnergy: -2,
          conflictMode: -1,
        },
      ),
      option(
        "b",
        text(
          "Drop one dry line to revive the corpse.",
          "丢一句有点欠的梗，先把这个群从死亡状态拉回来。",
        ),
        {
          postingStyle: 1,
          ironyLevel: 2,
        },
      ),
      option(
        "c",
        text(
          "Make a decision tree because somebody has to parent this.",
          "直接做决定树和表决流程，因为总得有人当爹妈。",
        ),
        {
          socialEnergy: 1,
          conflictMode: 1,
          delusionLevel: 1,
        },
      ),
      option(
        "d",
        text(
          "Say 'hear me out' and turn dinner into an incident.",
          "来一句“你们先听我说完”，把吃饭局直接整成事故现场。",
        ),
        {
          postingStyle: 1,
          socialEnergy: 2,
          delusionLevel: 2,
        },
      ),
    ],
  },
  {
    id: "public-feedback",
    prompt: text(
      "Three strangers compliment your outfit in one night.",
      "一个晚上有三个人夸你这身很绝。你的内心反应是？",
    ),
    options: [
      option("a", text("Say thanks and continue being unreadable.", "礼貌说谢谢，继续假装自己只是普通路人。"), {
        delusionLevel: -1,
      }),
      option(
        "b",
        text(
          "Act chill, then make one ironic note about the data.",
          "表面淡定，心里默默记下一条“数据回暖”的观察。",
        ),
        {
          postingStyle: 1,
          ironyLevel: 1,
        },
      ),
      option(
        "c",
        text(
          "Assume the universe is soft-launching my peak.",
          "默认宇宙正在给我的高光期做预热。",
        ),
        {
          socialEnergy: 1,
          delusionLevel: 2,
        },
      ),
      option(
        "d",
        text("Take mirror pics because history needs records.", "立刻补拍镜子照，今晚这种状态必须留档。"),
        {
          postingStyle: 2,
          delusionLevel: 1,
        },
      ),
    ],
  },
  {
    id: "post-flatlines",
    prompt: text(
      "Your post flops. Like, clinically.",
      "你刚发的内容扑得很彻底，安静得像被限流。你怎么办？",
    ),
    options: [
      option("a", text("Leave it up. Silence is still luxury.", "不删。冷门有时候也是一种高级。"), {
        postingStyle: -1,
        delusionLevel: -1,
      }),
      option(
        "b",
        text(
          "Call it niche and move with a joke.",
          "自嘲一句“太超前了”，把体面捞回来。",
        ),
        {
          ironyLevel: 2,
          conflictMode: -1,
        },
      ),
      option(
        "c",
        text(
          "Decide the room simply wasn't ready for the angle.",
          "认定不是我不行，是这届观众根本没跟上。",
        ),
        {
          postingStyle: 1,
          delusionLevel: 2,
        },
      ),
      option(
        "d",
        text(
          "Repackage it into Stories, memes, and a side conversation.",
          "马上拆成朋友圈、群聊二发和小范围投喂，继续推。",
        ),
        {
          postingStyle: 2,
          socialEnergy: 1,
          delusionLevel: 1,
        },
      ),
    ],
  },
  {
    id: "vague-post-paranoia",
    prompt: text(
      "You see a vague post that could be about you. Maybe.",
      "你刷到一条阴阳怪气的动态，越看越像在说你。你会？",
    ),
    options: [
      option("a", text("Choose peace and keep scrolling.", "强行劝自己别对号入座，直接划走。"), {
        conflictMode: -2,
        delusionLevel: -1,
      }),
      option(
        "b",
        text(
          "Screenshot it for one trusted debrief specialist.",
          "截图发给最懂你的那个人，让对方帮你审判一下。",
        ),
        {
          socialEnergy: 1,
          ironyLevel: 1,
          delusionLevel: 1,
        },
      ),
      option(
        "c",
        text(
          "Ask directly. If we're crashing out, we do it clean.",
          "直接去问。真要疯也得明着疯。",
        ),
        {
          conflictMode: 2,
        },
      ),
      option(
        "d",
        text(
          "Assume it's about me because the universe loves subplots.",
          "默认就是在说我，毕竟世界就爱给我加支线。",
        ),
        {
          delusionLevel: 2,
        },
      ),
    ],
  },
  {
    id: "close-friends-economy",
    prompt: text(
      "What is your Close Friends strategy, really?",
      "你的朋友圈分组或 Close Friends，到底是什么玩法？",
    ),
    options: [
      option(
        "a",
        text(
          "I barely post. The list is basically a rumor.",
          "我几乎不发，分组名单本来就是都市传说。",
        ),
        {
          postingStyle: -2,
          socialEnergy: -1,
        },
      ),
      option(
        "b",
        text(
          "Tiny list, suspicious vibes, elite confusion.",
          "名单很小，气氛很怪，外人看不懂是最好的。",
        ),
        {
          postingStyle: 1,
          ironyLevel: 1,
          delusionLevel: 1,
        },
      ),
      option(
        "c",
        text(
          "It's where I recycle feelings into content-safe jokes.",
          "那是我把情绪加工成梗的私人试验田。",
        ),
        {
          postingStyle: 1,
          socialEnergy: 1,
          ironyLevel: 2,
        },
      ),
      option(
        "d",
        text(
          "Premium tier. Curated access. Soft power.",
          "纯 VIP 制度，谁能进来全看我今天想让谁看到。",
        ),
        {
          postingStyle: 2,
          socialEnergy: 1,
          delusionLevel: 2,
        },
      ),
    ],
  },
  {
    id: "voice-note-incident",
    prompt: text(
      "A friend sends a 9-minute voice note labeled 'quick thing.'",
      "朋友给你发来一条 9 分钟语音，开头还说“我很快讲一下”。你会？",
    ),
    options: [
      option(
        "a",
        text(
          "I will process that spiritually and respond later.",
          "我会先在精神上听完，实际回复等以后再说。",
        ),
        {
          socialEnergy: -2,
        },
      ),
      option(
        "b",
        text(
          "2x speed, then a clinically funny reply.",
          "二倍速听完，再回一句又安全又好笑的。",
        ),
        {
          ironyLevel: 2,
          conflictMode: -1,
        },
      ),
      option(
        "c",
        text(
          "Call immediately because this is now an incident.",
          "直接打过去，这事已经不是打字能解决的了。",
        ),
        {
          socialEnergy: 1,
          conflictMode: 1,
        },
      ),
      option(
        "d",
        text(
          "Send one back that's longer and somehow mythic.",
          "我也回一条更长的，顺便把这事讲成史诗。",
        ),
        {
          postingStyle: 1,
          socialEnergy: 2,
          delusionLevel: 2,
        },
      ),
    ],
  },
  {
    id: "joke-theft",
    prompt: text(
      "Someone steals your joke on the timeline.",
      "有人在网上几乎原封不动偷了你的梗。你会？",
    ),
    options: [
      option("a", text("Say nothing. Karma loves overtime.", "不说。报应会自己加班。"), {
        conflictMode: -2,
        ironyLevel: 1,
      }),
      option(
        "b",
        text(
          "Post 'interesting' and let real ones connect dots.",
          "发个“有意思”，让懂的人自己连线。",
        ),
        {
          postingStyle: 1,
          ironyLevel: 2,
        },
      ),
      option(
        "c",
        text(
          "Bring timestamps. No screaming, just paperwork.",
          "带时间线去对账，不吵，只留证据。",
        ),
        {
          postingStyle: 1,
          conflictMode: 2,
        },
      ),
      option(
        "d",
        text(
          "Turn it into a group chat festival within minutes.",
          "五分钟内把这事变成群里的大型吃瓜现场。",
        ),
        {
          socialEnergy: 2,
          delusionLevel: 1,
        },
      ),
    ],
  },
  {
    id: "come-out-rn",
    prompt: text(
      "You get a 'come out rn' text with 45 minutes notice.",
      "有人临时 45 分钟喊你“快出来，别废话”。你会？",
    ),
    options: [
      option(
        "a",
        text(
          "Absolutely not. I respect chaos from indoors.",
          "不去，我在室内远程尊重混乱。",
        ),
        {
          socialEnergy: -2,
          delusionLevel: -1,
        },
      ),
      option(
        "b",
        text(
          "Maybe, if the outfit assembles itself and the bit is strong.",
          "看造型和氛围值不值得我出门。",
        ),
        {
          ironyLevel: 1,
          delusionLevel: 1,
        },
      ),
      option(
        "c",
        text(
          "Yes. This already feels narratively important.",
          "去，这事听起来已经很有剧情感了。",
        ),
        {
          socialEnergy: 1,
          delusionLevel: 2,
        },
      ),
      option(
        "d",
        text(
          "Yes, and I already invited two extra problems.",
          "去，而且我还要顺手再摇两个人，把局面做大。",
        ),
        {
          postingStyle: 1,
          socialEnergy: 2,
          conflictMode: 1,
        },
      ),
    ],
  },
  {
    id: "ex-locked-in",
    prompt: text(
      "Your ex posts 'locked in' with a gym selfie.",
      "前任突然发健身自拍，一股“我已经进入新人生”的味儿扑面而来。你会？",
    ),
    options: [
      option("a", text("I do not monitor the deceased.", "我对已入土的人没有观察欲。"), {
        conflictMode: -1,
        delusionLevel: -2,
      }),
      option(
        "b",
        text(
          "Send it to one friend with 'lmao be serious.'",
          "甩给一个朋友一句：他又演上了。",
        ),
        {
          socialEnergy: 1,
          ironyLevel: 2,
        },
      ),
      option(
        "c",
        text("Assume it's at least 17% about me.", "默认这事至少 17% 跟我有关。"),
        {
          delusionLevel: 2,
        },
      ),
      option(
        "d",
        text(
          "Post hotter within the hour and let physics handle it.",
          "一个小时内发更能打的自拍，让生态自己运转。",
        ),
        {
          postingStyle: 2,
          conflictMode: 1,
          delusionLevel: 1,
        },
      ),
    ],
  },
  {
    id: "aux-appointment",
    prompt: text(
      "You get handed aux at the pregame.",
      "聚会把放歌权交给你。你会怎么接？",
    ),
    options: [
      option(
        "a",
        text(
          "Choose something safe and vanish into the furniture.",
          "来点安全牌，然后默默退回角落。",
        ),
        {
          socialEnergy: -1,
          delusionLevel: -1,
        },
      ),
      option(
        "b",
        text(
          "Go niche and funny because texture matters.",
          "放点有点怪但很有梗的，让全场先长出质感。",
        ),
        {
          ironyLevel: 2,
        },
      ),
      option(
        "c",
        text(
          "Build one immaculate run that changes somebody's week.",
          "排一段完整 flow，至少让今晚有人记住这套歌单。",
        ),
        {
          postingStyle: 1,
          delusionLevel: 1,
        },
      ),
      option(
        "d",
        text(
          "Turn the room into a season finale.",
          "直接把现场配成大结局，谁今晚不发疯都对不起这首歌。",
        ),
        {
          postingStyle: 1,
          socialEnergy: 2,
          delusionLevel: 2,
        },
      ),
    ],
  },
  {
    id: "friend-problem",
    prompt: text(
      "Your friend asks, 'Be honest, am I the problem?'",
      "朋友问你：“你说实话，我是不是这事里的问题本身？” 你会怎么回？",
    ),
    options: [
      option("a", text("I choose survival and say 'you're fine.'", "先保命，说你挺好的，问题不大。"), {
        conflictMode: -1,
      }),
      option(
        "b",
        text(
          "Give a funny but accurate drag.",
          "来一段好笑但精准的点拨，既损到位又不至于绝交。",
        ),
        {
          ironyLevel: 2,
          conflictMode: 1,
        },
      ),
      option(
        "c",
        text(
          "Give the full audit with timestamps and examples.",
          "直接给完整复盘，案例、节点、来龙去脉一个不落。",
        ),
        {
          socialEnergy: 1,
          conflictMode: 2,
        },
      ),
      option(
        "d",
        text(
          "Say 'yes, but iconically' and start mythologizing it.",
          "回答“是，但你这个疯法很有个人风格”，顺手把他写进新 lore。",
        ),
        {
          socialEnergy: 1,
          delusionLevel: 2,
        },
      ),
    ],
  },
  {
    id: "offline-comeback",
    prompt: text(
      "You vanish for 48 hours and return online. What's the comeback?",
      "你消失 48 小时后重新上线，第一条会发什么？",
    ),
    options: [
      option(
        "a",
        text(
          "No announcement. If you noticed, that's on you.",
          "什么都不说。爱猜的人自己去猜。",
        ),
        {
          postingStyle: -2,
          socialEnergy: -1,
        },
      ),
      option(
        "b",
        text(
          "One dry line like nothing happened.",
          "轻描淡写来一句，好像自己从没离开过。",
        ),
        {
          postingStyle: 1,
          ironyLevel: 2,
        },
      ),
      option(
        "c",
        text(
          "One perfect photo that restarts the timeline.",
          "丢一张状态超好的图，直接让时间线重新开机。",
        ),
        {
          postingStyle: 2,
          delusionLevel: 1,
        },
      ),
      option(
        "d",
        text(
          "A full lore drop because absence is part of the brand.",
          "一整段近况加剧情补完，告诉大家你这两天到底错过了什么。",
        ),
        {
          postingStyle: 1,
          socialEnergy: 1,
          delusionLevel: 2,
        },
      ),
    ],
  },
];
