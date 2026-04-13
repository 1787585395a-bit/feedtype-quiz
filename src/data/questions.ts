import type { AnswerOption, DimensionScores, Question } from "../types";

const option = (
  id: string,
  label: string,
  weights: Partial<DimensionScores>,
): AnswerOption => ({
  id,
  label,
  weights,
});

export const questions: Question[] = [
  {
    id: "story-speedrun",
    prompt: "Your situationship watches your Story in 11 seconds. Your next move?",
    options: [
      option("a", "Do nothing. God and the archive saw it.", {
        postingStyle: -1,
        socialEnergy: -1,
        conflictMode: -1,
        delusionLevel: -1,
      }),
      option("b", "Send it to one friend with 'interesting.'", {
        socialEnergy: 1,
        ironyLevel: 1,
        delusionLevel: 1,
      }),
      option("c", "Post a second Story that is somehow even more targeted.", {
        postingStyle: 2,
        delusionLevel: 2,
      }),
      option("d", "Turn the group chat into a forensic lab immediately.", {
        postingStyle: 1,
        socialEnergy: 2,
        delusionLevel: 1,
      }),
    ],
  },
  {
    id: "timeline-war-crime",
    prompt: "A mutual posts a take so bad it wrinkles the timeline.",
    options: [
      option("a", "Mute and scroll. Peace is still free.", {
        socialEnergy: -1,
        conflictMode: -2,
      }),
      option("b", "Subtweet the phenomenon, not the person.", {
        postingStyle: 1,
        ironyLevel: 2,
        conflictMode: -1,
      }),
      option("c", "Reply with 'be serious' and a clean receipt trail.", {
        postingStyle: 1,
        conflictMode: 2,
      }),
      option("d", "Turn it into a room-wide event because why waste a disaster?", {
        postingStyle: 1,
        socialEnergy: 1,
        conflictMode: 1,
        delusionLevel: 1,
      }),
    ],
  },
  {
    id: "soft-launch-doctrine",
    prompt: "You're about to soft-launch someone. What actually gets posted?",
    options: [
      option("a", "Nothing. Privacy is my hottest angle.", {
        postingStyle: -2,
        delusionLevel: -1,
      }),
      option("b", "One blurry hand and zero explanation.", {
        postingStyle: 1,
        delusionLevel: 1,
      }),
      option("c", "A caption that implies fate has me on notifications.", {
        postingStyle: 1,
        socialEnergy: 1,
        delusionLevel: 2,
      }),
      option("d", "A reveal arc. This is not a post, it's rollout.", {
        postingStyle: 2,
        socialEnergy: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "group-chat-cpr",
    prompt: "The group chat is dead and the plan is rotting. What do you do?",
    options: [
      option("a", "React once and disappear before leadership finds me.", {
        socialEnergy: -2,
        conflictMode: -1,
      }),
      option("b", "Drop one dry line to revive the corpse.", {
        postingStyle: 1,
        ironyLevel: 2,
      }),
      option("c", "Make a decision tree because somebody has to parent this.", {
        socialEnergy: 1,
        conflictMode: 1,
        delusionLevel: 1,
      }),
      option("d", "Say 'hear me out' and turn dinner into an incident.", {
        postingStyle: 1,
        socialEnergy: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "public-feedback",
    prompt: "Three strangers compliment your outfit in one night.",
    options: [
      option("a", "Say thanks and continue being unreadable.", {
        delusionLevel: -1,
      }),
      option("b", "Act chill, then make one ironic note about the data.", {
        postingStyle: 1,
        ironyLevel: 1,
      }),
      option("c", "Assume the universe is soft-launching my peak.", {
        socialEnergy: 1,
        delusionLevel: 2,
      }),
      option("d", "Take mirror pics because history needs records.", {
        postingStyle: 2,
        delusionLevel: 1,
      }),
    ],
  },
  {
    id: "post-flatlines",
    prompt: "Your post flops. Like, clinically.",
    options: [
      option("a", "Leave it up. Silence is still luxury.", {
        postingStyle: -1,
        delusionLevel: -1,
      }),
      option("b", "Call it niche and move with a joke.", {
        ironyLevel: 2,
        conflictMode: -1,
      }),
      option("c", "Decide the room simply wasn't ready for the angle.", {
        postingStyle: 1,
        delusionLevel: 2,
      }),
      option("d", "Repackage it into Stories, memes, and a side conversation.", {
        postingStyle: 2,
        socialEnergy: 1,
        delusionLevel: 1,
      }),
    ],
  },
  {
    id: "vague-post-paranoia",
    prompt: "You see a vague post that could be about you. Maybe.",
    options: [
      option("a", "Choose peace and keep scrolling.", {
        conflictMode: -2,
        delusionLevel: -1,
      }),
      option("b", "Screenshot it for one trusted debrief specialist.", {
        socialEnergy: 1,
        ironyLevel: 1,
        delusionLevel: 1,
      }),
      option("c", "Ask directly. If we're crashing out, we do it clean.", {
        conflictMode: 2,
      }),
      option("d", "Assume it's about me because the universe loves subplots.", {
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "close-friends-economy",
    prompt: "What is your Close Friends strategy, really?",
    options: [
      option("a", "I barely post. The list is basically a rumor.", {
        postingStyle: -2,
        socialEnergy: -1,
      }),
      option("b", "Tiny list, suspicious vibes, elite confusion.", {
        postingStyle: 1,
        ironyLevel: 1,
        delusionLevel: 1,
      }),
      option("c", "It's where I recycle feelings into content-safe jokes.", {
        postingStyle: 1,
        socialEnergy: 1,
        ironyLevel: 2,
      }),
      option("d", "Premium tier. Curated access. Soft power.", {
        postingStyle: 2,
        socialEnergy: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "voice-note-incident",
    prompt: "A friend sends a 9-minute voice note labeled 'quick thing.'",
    options: [
      option("a", "I will process that spiritually and respond later.", {
        socialEnergy: -2,
      }),
      option("b", "2x speed, then a clinically funny reply.", {
        ironyLevel: 2,
        conflictMode: -1,
      }),
      option("c", "Call immediately because this is now an incident.", {
        socialEnergy: 1,
        conflictMode: 1,
      }),
      option("d", "Send one back that's longer and somehow mythic.", {
        postingStyle: 1,
        socialEnergy: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "joke-theft",
    prompt: "Someone steals your joke on the timeline.",
    options: [
      option("a", "Say nothing. Karma loves overtime.", {
        conflictMode: -2,
        ironyLevel: 1,
      }),
      option("b", "Post 'interesting' and let real ones connect dots.", {
        postingStyle: 1,
        ironyLevel: 2,
      }),
      option("c", "Bring timestamps. No screaming, just paperwork.", {
        postingStyle: 1,
        conflictMode: 2,
      }),
      option("d", "Turn it into a group chat festival within minutes.", {
        socialEnergy: 2,
        delusionLevel: 1,
      }),
    ],
  },
  {
    id: "come-out-rn",
    prompt: "You get a 'come out rn' text with 45 minutes notice.",
    options: [
      option("a", "Absolutely not. I respect chaos from indoors.", {
        socialEnergy: -2,
        delusionLevel: -1,
      }),
      option("b", "Maybe, if the outfit assembles itself and the bit is strong.", {
        ironyLevel: 1,
        delusionLevel: 1,
      }),
      option("c", "Yes. This already feels narratively important.", {
        socialEnergy: 1,
        delusionLevel: 2,
      }),
      option("d", "Yes, and I already invited two extra problems.", {
        postingStyle: 1,
        socialEnergy: 2,
        conflictMode: 1,
      }),
    ],
  },
  {
    id: "ex-locked-in",
    prompt: "Your ex posts 'locked in' with a gym selfie.",
    options: [
      option("a", "I do not monitor the deceased.", {
        conflictMode: -1,
        delusionLevel: -2,
      }),
      option("b", "Send it to one friend with 'lmao be serious.'", {
        socialEnergy: 1,
        ironyLevel: 2,
      }),
      option("c", "Assume it's at least 17% about me.", {
        delusionLevel: 2,
      }),
      option("d", "Post hotter within the hour and let physics handle it.", {
        postingStyle: 2,
        conflictMode: 1,
        delusionLevel: 1,
      }),
    ],
  },
  {
    id: "aux-appointment",
    prompt: "You get handed aux at the pregame.",
    options: [
      option("a", "Choose something safe and vanish into the furniture.", {
        socialEnergy: -1,
        delusionLevel: -1,
      }),
      option("b", "Go niche and funny because texture matters.", {
        ironyLevel: 2,
      }),
      option("c", "Build one immaculate run that changes somebody's week.", {
        postingStyle: 1,
        delusionLevel: 1,
      }),
      option("d", "Turn the room into a season finale.", {
        postingStyle: 1,
        socialEnergy: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "friend-problem",
    prompt: "Your friend asks, 'Be honest, am I the problem?'",
    options: [
      option("a", "I choose survival and say 'you're fine.'", {
        conflictMode: -1,
      }),
      option("b", "Give a funny but accurate drag.", {
        ironyLevel: 2,
        conflictMode: 1,
      }),
      option("c", "Give the full audit with timestamps and examples.", {
        socialEnergy: 1,
        conflictMode: 2,
      }),
      option("d", "Say 'yes, but iconically' and start mythologizing it.", {
        socialEnergy: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "offline-comeback",
    prompt: "You vanish for 48 hours and return online. What's the comeback?",
    options: [
      option("a", "No announcement. If you noticed, that's on you.", {
        postingStyle: -2,
        socialEnergy: -1,
      }),
      option("b", "One dry line like nothing happened.", {
        postingStyle: 1,
        ironyLevel: 2,
      }),
      option("c", "One perfect photo that restarts the timeline.", {
        postingStyle: 2,
        delusionLevel: 1,
      }),
      option("d", "A full lore drop because absence is part of the brand.", {
        postingStyle: 1,
        socialEnergy: 1,
        delusionLevel: 2,
      }),
    ],
  },
];
