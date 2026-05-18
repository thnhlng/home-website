import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";

const heroProps = {
  eyebrow: "An Intimate Gathering · October 17, 2026",
  headlineLead: "Girls",
  headlineAccent: "Reunion",
  headlineSuffix: "twenty · twenty · six",
  subtitle:
    "Six women, countless memories, one unforgettable evening — back together, finally, under one warm roof.",
  eventDate: "2026-10-17T19:00:00",
  meta: [
    { label: "Saturday", value: "17 · October · 2026" },
    { label: "From", value: "7 o’clock in the evening" },
    { label: "At", value: "Quyen’s home, Brooklyn" },
  ],
  primaryCta: { label: "RSVP Now", href: "#rsvp" },
  secondaryCta: { label: "View Details", href: "#details" },
};

const invitationProps = {
  frameTag: "est. since school days",
  eyebrow: "A Letter From The Host",
  headlineLead: "My dearest",
  headlineAccent: "six",
  paragraphs: [
    "It has been far too long since we were all in the same room — laughing too loudly, finishing each other’s sentences, and refusing to leave the kitchen.",
    "So I’m clearing the calendar, lighting every candle I own, and opening my home to the women who have been my family for as long as I can remember. No agenda. No formalities. Just us, a long table, and the kind of conversations that make you forget what time it is.",
    "Come hungry. Come early. Bring the stories.",
  ],
  signature: "Quyen",
  signatureRole: "Your Host, Friend & Fellow Troublemaker",
};

export function Homepage() {
  return (
    <main>
      <Hero {...heroProps} />
      <Invitation {...invitationProps} />
    </main>
  );
}
