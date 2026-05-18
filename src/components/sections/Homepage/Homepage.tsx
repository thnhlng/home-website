import { Hero } from "@/components/sections/Hero";

const heroProps = {
  eyebrow: "An Intimate Gathering · October 17, 2026",
  headlineLead: "Girls",
  headlineAccent: "Reunion",
  headlineSuffix: "twenty · twenty · six",
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

export function Homepage() {
  return (
    <main>
      <Hero {...heroProps} />
    </main>
  );
}
