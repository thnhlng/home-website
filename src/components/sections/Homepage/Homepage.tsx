import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { Details } from "@/components/sections/Details";
import { Schedule } from "@/components/sections/Schedule";

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

const detailsProps = {
  eyebrow: "The Particulars",
  headlineLead: "Everything you need to",
  headlineAccent: "know",
  items: [
    {
      num: "i.",
      label: "Date & Time",
      primary: (
        <>
          Saturday, <em>October 17</em>
          <br />
          7:00 pm — late
        </>
      ),
      sub: "Dinner at 8 sharp. Please don’t be early.",
    },
    {
      num: "ii.",
      label: "Address",
      primary: (
        <>
          12 Linden Lane
          <br />
          Brooklyn, NY 11215
        </>
      ),
      sub: "Brownstone, garden-level entrance, look for the lamp.",
    },
    {
      num: "iii.",
      label: "Parking",
      primary: (
        <>
          Free street parking
          <br />
          after 7 pm
        </>
      ),
      sub: "Linden Lane & 7th Avenue — easiest blocks.",
    },
    {
      num: "iv.",
      label: "Public Transit",
      primary: (
        <>
          F or G to <em>7th Avenue</em>
          <br />
          4-minute walk
        </>
      ),
      sub: "Last train back: 1:48 am. Or stay over.",
    },
    {
      num: "v.",
      label: "Dress Code",
      primary: (
        <>
          Cozy <em>elegant</em>
          <br />
          Soft fabrics, warm tones
        </>
      ),
      sub: "Slippers provided at the door.",
    },
    {
      num: "vi.",
      label: "Bring",
      primary: (
        <>
          Yourself
          <br />+ one memory to share
        </>
      ),
      sub: "Optional: a snack or bottle you love.",
    },
  ],
};

const scheduleProps = {
  eyebrow: "The Evening",
  headlineLead: "A loose plan,",
  headlineAccent: "followed loosely",
  items: [
    {
      time: "7:00",
      title: "Welcome drinks",
      note: "Sparkling wine, pomegranate spritz, something warm if it’s cold.",
      highlight: true,
    },
    {
      time: "8:00",
      title: "Dinner at the long table",
      note: "Slow, candle-lit, no phones unless they’re playing music.",
    },
    {
      time: "9:30",
      title: "Memory-sharing moment",
      note: "One story each — pick the one we’d never let you live down.",
    },
    {
      time: "10:30",
      title: "The infamous quiz",
      note: "How well do you really know us? Prepare to be roasted.",
    },
    {
      time: "11:30",
      title: "Music, photos & talking ’til late",
      note: "Dance floor optional. Whispered confessions encouraged.",
    },
  ],
};

export function Homepage() {
  return (
    <main>
      <Hero {...heroProps} />
      <Invitation {...invitationProps} />
      <Details {...detailsProps} />
      <Schedule {...scheduleProps} />
    </main>
  );
}
