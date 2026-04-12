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
    id: "birthday-carousel",
    prompt:
      "Your friend posts a cursed birthday carousel where you look slightly haunted. What happens next?",
    options: [
      option("a", "Save it privately and pretend the post never happened.", {
        postingStyle: -2,
        socialEnergy: -1,
        delusionLevel: -1,
      }),
      option("b", "Repost it with one dry emoji and plausible distance.", {
        postingStyle: -1,
        ironyLevel: 2,
      }),
      option("c", "Repost with a sweet caption because that is your friend.", {
        postingStyle: 1,
        socialEnergy: 1,
        ironyLevel: -2,
        delusionLevel: 1,
      }),
      option("d", "Turn it into a three-part Story event.", {
        postingStyle: 2,
        socialEnergy: 1,
        ironyLevel: -1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "misread-post",
    prompt: "Somebody on X completely misreads your post in public. Your move?",
    options: [
      option("a", "Close the app and let history misrepresent you.", {
        postingStyle: -1,
        conflictMode: -2,
      }),
      option("b", "Vague-post later so the real ones know.", {
        postingStyle: 1,
        ironyLevel: 1,
        conflictMode: -1,
      }),
      option("c", "Reply once, clearly and in complete sentences.", {
        conflictMode: 1,
        ironyLevel: -1,
      }),
      option("d", "Quote-post with screenshots, timestamps, and atmosphere.", {
        postingStyle: 2,
        ironyLevel: 1,
        conflictMode: 2,
      }),
    ],
  },
  {
    id: "dinner-plan",
    prompt: "The group chat is trying to plan dinner for eight people.",
    options: [
      option("a", "React with a heart and disappear until the reservation exists.", {
        socialEnergy: -2,
        conflictMode: -1,
      }),
      option("b", "Say 'down for whatever' and pray nobody asks follow-ups.", {
        socialEnergy: -1,
        delusionLevel: -1,
      }),
      option("c", "Start a poll, narrow options, keep it moving.", {
        socialEnergy: 1,
        conflictMode: 1,
        delusionLevel: 1,
      }),
      option("d", "Produce a concept night with outfit notes and backup spots.", {
        postingStyle: 1,
        socialEnergy: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "story-view",
    prompt: "Your situationship watches your Story in twelve seconds flat.",
    options: [
      option("a", "Notice silently and keep your dignity offline.", {
        delusionLevel: -1,
        conflictMode: -1,
      }),
      option("b", "Screenshot it for the group chat and ask for analysis.", {
        postingStyle: 1,
        socialEnergy: 1,
        delusionLevel: 1,
      }),
      option("c", "Post another Story that is somehow even more targeted.", {
        postingStyle: 2,
        delusionLevel: 2,
      }),
      option("d", "Mute them and suddenly become a wellness person.", {
        socialEnergy: -1,
        conflictMode: 1,
        delusionLevel: -2,
      }),
    ],
  },
  {
    id: "camera-roll-dump",
    prompt: "You have 97 good photos and one minute of attention left. What gets posted?",
    options: [
      option("a", "Nothing. The memories are for me and my cloud backup.", {
        postingStyle: -2,
        delusionLevel: -1,
      }),
      option("b", "A blurry one with an ironic caption about surviving.", {
        postingStyle: 1,
        ironyLevel: 2,
      }),
      option("c", "A clean carousel with one sincere line.", {
        postingStyle: 1,
        ironyLevel: -1,
        delusionLevel: 1,
      }),
      option("d", "A photo dump, a Story, and a song choice that changes lives.", {
        postingStyle: 2,
        ironyLevel: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "friends-ex-follow",
    prompt: "Your friend's ex follows you out of nowhere.",
    options: [
      option("a", "Ignore it. Your soul leaves your body, but privately.", {
        conflictMode: -2,
        socialEnergy: -1,
      }),
      option("b", "Tell your friend immediately because this is intel.", {
        socialEnergy: 1,
      }),
      option("c", "Soft block. No speeches. No thread.", {
        conflictMode: 1,
        delusionLevel: -1,
      }),
      option("d", "Accept, investigate, and start building a theory board.", {
        ironyLevel: 1,
        conflictMode: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "we-should-hang",
    prompt: "Someone texts 'we should hang soon' with zero specifics.",
    options: [
      option("a", "Like the message and spiritually archive them.", {
        socialEnergy: -2,
        conflictMode: -1,
      }),
      option("b", "Reply 'absolutely' and let fate decide.", {
        socialEnergy: -1,
        delusionLevel: 1,
      }),
      option("c", "Send actual dates because somebody has to.", {
        socialEnergy: 1,
        conflictMode: 1,
      }),
      option("d", "Build a whole plan and a backup plan within minutes.", {
        socialEnergy: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "trending-audio",
    prompt: "Your friend asks you to do a trending audio with them.",
    options: [
      option("a", "Absolutely not. I was born to spectate.", {
        postingStyle: -2,
        socialEnergy: -1,
      }),
      option("b", "Only if we do it ironically and never speak of it again.", {
        ironyLevel: 2,
      }),
      option("c", "Sure, but let's make it look accidentally effortless.", {
        postingStyle: 1,
        socialEnergy: 1,
        delusionLevel: 1,
      }),
      option("d", "Yes, and now there is a shot list.", {
        postingStyle: 2,
        socialEnergy: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "vague-story",
    prompt: "You see a vague Story that might be about you. Maybe.",
    options: [
      option("a", "Convince yourself it is not and keep moving.", {
        conflictMode: -2,
        delusionLevel: -2,
      }),
      option("b", "Send it to one trusted friend for calibration.", {
        socialEnergy: 1,
        delusionLevel: 1,
      }),
      option("c", "Post something sharper but technically unrelated.", {
        postingStyle: 1,
        ironyLevel: 1,
        conflictMode: 1,
      }),
      option("d", "Ask directly. If we are spiraling, we are spiraling cleanly.", {
        conflictMode: 2,
        ironyLevel: -1,
      }),
    ],
  },
  {
    id: "aux-duty",
    prompt: "You get handed aux at a pregame.",
    options: [
      option("a", "Pick something safe and vanish into the furniture.", {
        socialEnergy: -1,
        delusionLevel: -1,
      }),
      option("b", "Lean niche and funny because the room deserves texture.", {
        ironyLevel: 2,
        delusionLevel: 1,
      }),
      option("c", "Read the room and land a credible run.", {
        socialEnergy: 1,
        postingStyle: 1,
      }),
      option("d", "Curate a multi-act experience with a closing statement.", {
        socialEnergy: 2,
        postingStyle: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "close-friends",
    prompt: "It is time to clean up your Close Friends list.",
    options: [
      option("a", "I do not have one. My life is already classified.", {
        postingStyle: -2,
        socialEnergy: -1,
      }),
      option("b", "Leave it messy. Ambiguity is part of the product.", {
        ironyLevel: 1,
        conflictMode: -1,
      }),
      option("c", "Trim it quietly with no announcements.", {
        conflictMode: 1,
        delusionLevel: -1,
      }),
      option("d", "Rebuild it like a private membership tier.", {
        postingStyle: 1,
        conflictMode: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "text-punctuation",
    prompt: "Someone says you read too much into text punctuation.",
    options: [
      option("a", "They're right, but I will never admit that publicly.", {
        ironyLevel: 1,
        delusionLevel: 1,
      }),
      option("b", "Everything means something. That is not a crime.", {
        ironyLevel: -1,
        delusionLevel: 2,
      }),
      option("c", "Punctuation is just punctuation. I choose peace.", {
        ironyLevel: -1,
        delusionLevel: -2,
      }),
      option("d", "I reply with a three-slide taxonomy of dots and commas.", {
        postingStyle: 1,
        ironyLevel: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "group-chat-joke",
    prompt: "You send a joke to the group chat. Silence for nine minutes.",
    options: [
      option("a", "Delete your own self-esteem and move on.", {
        socialEnergy: -1,
        conflictMode: -1,
        delusionLevel: -1,
      }),
      option("b", "Follow up with 'tough room' and a skull emoji.", {
        postingStyle: 1,
        ironyLevel: 2,
      }),
      option("c", "Ask who in there hates joy.", {
        conflictMode: 1,
        socialEnergy: 1,
      }),
      option("d", "Double down with a second joke and a poll.", {
        postingStyle: 2,
        socialEnergy: 1,
        conflictMode: 1,
        delusionLevel: 1,
      }),
    ],
  },
  {
    id: "soft-launch",
    prompt: "You are debating whether to soft-launch a relationship online.",
    options: [
      option("a", "No post until marriage, indictment, or death.", {
        postingStyle: -2,
        delusionLevel: -1,
      }),
      option("b", "One hand, one coffee, zero explanation.", {
        postingStyle: 1,
        delusionLevel: 1,
      }),
      option("c", "A clean hard launch when the narrative is ready.", {
        postingStyle: 1,
        conflictMode: 1,
        delusionLevel: 2,
      }),
      option("d", "I have already storyboarded the reveal arc.", {
        postingStyle: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "voice-note",
    prompt: "A friend sends a 12-minute voice note labeled 'quick update.'",
    options: [
      option("a", "I transcribe the vibe from the waveform and reply later.", {
        socialEnergy: -2,
        ironyLevel: 1,
      }),
      option("b", "I listen on 2x and send a measured emoji combo.", {
        socialEnergy: -1,
        conflictMode: -1,
      }),
      option("c", "I call them because clearly the chat has escalated.", {
        socialEnergy: 1,
        conflictMode: 1,
      }),
      option("d", "I send a matching voice note and now we are podcasting.", {
        postingStyle: 1,
        socialEnergy: 2,
      }),
    ],
  },
  {
    id: "bad-take",
    prompt: "A mutual posts a terrible take about your favorite movie.",
    options: [
      option("a", "I whisper 'wrong' to myself and keep scrolling.", {
        conflictMode: -2,
        socialEnergy: -1,
      }),
      option("b", "I subtweet the phenomenon, not the person.", {
        postingStyle: 1,
        ironyLevel: 1,
        conflictMode: -1,
      }),
      option("c", "I reply with one respectful correction.", {
        conflictMode: 1,
        ironyLevel: -1,
      }),
      option("d", "I enter the comments like I pay rent there.", {
        postingStyle: 2,
        conflictMode: 2,
        delusionLevel: 1,
      }),
    ],
  },
  {
    id: "old-like",
    prompt: "You accidentally like a photo from 2021.",
    options: [
      option("a", "Unlike instantly and pretend your thumb was hacked.", {
        delusionLevel: -1,
        conflictMode: -1,
      }),
      option("b", "Leave it. If I die, I die.", {
        delusionLevel: 1,
        conflictMode: 1,
      }),
      option("c", "Send a message so at least the lore is coherent.", {
        socialEnergy: 1,
        conflictMode: 1,
        delusionLevel: 1,
      }),
      option("d", "This is now part of my narrative. Let it simmer.", {
        ironyLevel: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "photo-dump-flops",
    prompt: "Your photo dump flops harder than expected.",
    options: [
      option("a", "Delete? Never. I post for the archive, not the market.", {
        postingStyle: -1,
        delusionLevel: -1,
      }),
      option("b", "Call it niche and move with dignity.", {
        ironyLevel: 1,
        conflictMode: -1,
      }),
      option("c", "Analyze the posting time, cover photo, and caption strategy.", {
        postingStyle: 1,
        delusionLevel: 1,
      }),
      option("d", "Repackage the same content as Stories, Reels, and destiny.", {
        postingStyle: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "slack-self",
    prompt: "Your work self and your real internet self are...",
    options: [
      option("a", "Basically the same. I contain no secret bit.", {
        ironyLevel: -2,
        delusionLevel: -1,
      }),
      option("b", "Siblings. One drinks oat milk, one quote-posts.", {
        ironyLevel: 1,
        delusionLevel: 1,
      }),
      option("c", "Separate legal entities.", {
        ironyLevel: 2,
        postingStyle: 1,
      }),
      option("d", "A prestige drama and its unhinged aftershow.", {
        ironyLevel: 2,
        postingStyle: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "brunch-invite",
    prompt: "You get invited to brunch with two hours' notice.",
    options: [
      option("a", "I respect spontaneous joy from a safe distance.", {
        socialEnergy: -2,
        conflictMode: -1,
      }),
      option("b", "Maybe, if the outfit assembles itself.", {
        socialEnergy: -1,
        delusionLevel: 1,
      }),
      option("c", "Yes. I'll be there and on time somehow.", {
        socialEnergy: 1,
      }),
      option("d", "Yes, and I am bringing narrative momentum.", {
        socialEnergy: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "locked-in-post",
    prompt: "Your ex posts a gym selfie with the caption 'locked in.'",
    options: [
      option("a", "I do not see posts from the deceased.", {
        conflictMode: -1,
        delusionLevel: -2,
      }),
      option("b", "I send it to one friend with 'be serious.'", {
        socialEnergy: 1,
        ironyLevel: 1,
      }),
      option("c", "I assume it is about me because storytelling matters.", {
        delusionLevel: 2,
      }),
      option("d", "I post hotter within the hour and let the ecosystem react.", {
        postingStyle: 2,
        delusionLevel: 2,
        conflictMode: 1,
      }),
    ],
  },
  {
    id: "playlist-duty",
    prompt: "You are asked to make the playlist for a friend's party.",
    options: [
      option("a", "Please no. I fear being perceived through transitions.", {
        socialEnergy: -1,
        delusionLevel: -1,
      }),
      option("b", "I make it weird on purpose so nobody can grade me normally.", {
        ironyLevel: 2,
        delusionLevel: 1,
      }),
      option("c", "I make it balanced and quietly effective.", {
        socialEnergy: 1,
        ironyLevel: -1,
      }),
      option("d", "I make three versions and a cover image.", {
        postingStyle: 1,
        socialEnergy: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "stolen-joke",
    prompt: "Someone basically steals your joke on the timeline.",
    options: [
      option("a", "I let karma and unemployment handle it.", {
        conflictMode: -2,
        ironyLevel: 1,
      }),
      option("b", "I post something like 'interesting' and keep it pushing.", {
        postingStyle: 1,
        ironyLevel: 2,
        conflictMode: -1,
      }),
      option("c", "I text them directly because I enjoy closure.", {
        conflictMode: 1,
        ironyLevel: -1,
      }),
      option("d", "I post the original with a timestamp and a grin.", {
        postingStyle: 2,
        conflictMode: 2,
      }),
    ],
  },
  {
    id: "compliments",
    prompt: "Three people compliment your outfit in one night.",
    options: [
      option("a", "Thank you. I continue behaving like a civilian.", {
        delusionLevel: -1,
      }),
      option("b", "I act chill while internally levitating.", {
        delusionLevel: 1,
      }),
      option("c", "I take mirror pics because the moment deserves records.", {
        postingStyle: 1,
        delusionLevel: 1,
      }),
      option("d", "I start walking like the finale has begun.", {
        socialEnergy: 1,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "be-honest",
    prompt: "Your friend asks, 'Be honest, am I insane?'",
    options: [
      option("a", "I offer comfort. Labels are above my pay grade.", {
        conflictMode: -1,
        ironyLevel: -1,
      }),
      option("b", "I say 'define insane' and buy time.", {
        ironyLevel: 2,
        conflictMode: -1,
      }),
      option("c", "I answer carefully, like a PR team in a storm.", {
        conflictMode: 1,
        socialEnergy: 1,
      }),
      option("d", "I give the full post-game report with timestamps.", {
        conflictMode: 2,
        postingStyle: 1,
      }),
    ],
  },
  {
    id: "go-offline",
    prompt: "You disappear from the internet for 48 hours.",
    options: [
      option("a", "That sounds ideal, not alarming.", {
        postingStyle: -2,
        socialEnergy: -1,
      }),
      option("b", "I could do it, but everyone would feel my absence.", {
        delusionLevel: 1,
      }),
      option("c", "I would announce it ironically, then fail.", {
        postingStyle: 1,
        ironyLevel: 2,
      }),
      option("d", "I would come back with lore, photos, and a perspective shift.", {
        postingStyle: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "wrapped-request",
    prompt: "People ask for your Letterboxd, playlists, or Wrapped every year because...",
    options: [
      option("a", "They do not. My taste is not a public utility.", {
        postingStyle: -2,
        socialEnergy: -1,
      }),
      option("b", "I have a quiet niche authority thing going on.", {
        ironyLevel: 1,
        delusionLevel: 1,
      }),
      option("c", "I post enough that people know what they are getting.", {
        postingStyle: 1,
        socialEnergy: 1,
      }),
      option("d", "My recommendations are an event franchise.", {
        postingStyle: 2,
        delusionLevel: 2,
      }),
    ],
  },
  {
    id: "uber-debrief",
    prompt: "At the end of the night, the Uber debrief becomes your stage.",
    options: [
      option("a", "I stare out the window and process in private.", {
        socialEnergy: -2,
        delusionLevel: -1,
      }),
      option("b", "I offer one-liners and strategic sound effects.", {
        ironyLevel: 2,
      }),
      option("c", "I recap the facts so nobody rewrites history tomorrow.", {
        socialEnergy: 1,
        conflictMode: 1,
      }),
      option("d", "I deliver a full season finale monologue.", {
        postingStyle: 1,
        socialEnergy: 2,
        delusionLevel: 2,
      }),
    ],
  },
];
