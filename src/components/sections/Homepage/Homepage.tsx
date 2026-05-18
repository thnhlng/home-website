import { TopBar } from "@/components/sections/TopBar";
import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { Details } from "@/components/sections/Details";
import { Schedule } from "@/components/sections/Schedule";
import { Menu } from "@/components/sections/Menu";
import { RSVP } from "@/components/sections/RSVP";
import { Gallery } from "@/components/sections/Gallery";
import { Footer, HeartDot } from "@/components/sections/Footer";

const topBarProps = {
  mark: "Girls Reunion · 2026",
  links: [
    { label: "Invitation", href: "#invitation" },
    { label: "Details", href: "#details" },
    { label: "Evening", href: "#schedule" },
    { label: "Menu", href: "#menu" },
    { label: "RSVP", href: "#rsvp" },
    { label: "Gallery", href: "#gallery" },
  ],
};

const footerProps = {
  pill: "A private page · for the six of us",
  headline: (
    <>
      Thank you for being
      <br />
      the people I’d pick again, <em>every time.</em>
    </>
  ),
  message:
    "This page is a quiet little corner of the internet, just for us. Don’t share the link — and bring your softest self on the seventeenth.",
  meta: [
    "Girls Reunion · MMXXVI",
    <>
      Made <HeartDot /> with love, by your host
    </>,
    "quyen@thereunion.club",
  ],
};

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

const menuProps = {
  eyebrow: "At The Table",
  headlineLead: "Dinner, slowly,",
  headlineAccent: "together",
  columns: [
    {
      title: "To Begin",
      items: [
        {
          name: "Burrata & roasted figs",
          desc: "Honey, thyme, sourdough crostini.",
          tag: "V",
        },
        {
          name: "Smoked beet carpaccio",
          desc: "Walnut, orange zest, soft goat cheese.",
          tag: "V · GF",
        },
        {
          name: "Warm olives & marcona almonds",
          desc: "Rosemary, sea salt, lemon peel.",
          tag: "VG · GF",
        },
      ],
    },
    {
      title: "The Main Course",
      items: [
        {
          name: "Slow-braised short rib",
          desc: "Red wine reduction, soft polenta, gremolata.",
          tag: "GF",
        },
        {
          name: "Saffron & lemon risotto",
          desc: "Parmigiano, charred leeks, brown butter.",
          tag: "V · GF",
        },
        {
          name: "Roasted heirloom carrots",
          desc: "Tahini, dukkah, pomegranate.",
          tag: "VG · GF",
        },
      ],
    },
    {
      title: "Something Sweet",
      items: [
        {
          name: "Olive oil cake",
          desc: "Citrus glaze, candied rosemary.",
          tag: "V",
        },
        {
          name: "Dark chocolate & sea salt",
          desc: "70% Valrhona, flaked Maldon.",
          tag: "VG · GF",
        },
        {
          name: "Espresso, mint tea, digestifs",
          desc: "Take your pick — we’ll be up a while.",
        },
      ],
    },
    {
      title: "To Pour",
      items: [
        {
          name: "Champagne welcome",
          desc: "Blanc de blancs, very cold.",
        },
        {
          name: "Red — Sangiovese, Tuscany",
          desc: "Earthy, easy, made for short rib.",
        },
        {
          name: "White — Albariño, Rías Baixas",
          desc: "Bright, salty, made for risotto.",
        },
        {
          name: "Zero-proof",
          desc: "Pomegranate spritz, ginger-honey fizz, herbal infusions.",
        },
      ],
    },
  ],
  allergyNote:
    "A note on allergies — tell me on your RSVP and I’ll quietly take care of it. There will always be something gorgeous for you to eat.",
  allergyFootnote:
    "If you have a favourite bottle or a treasured family snack — bring it. Not required, always welcomed.",
};

const rsvpProps = {
  eyebrow: "Kindly Reply",
  headlineLead: "Tell me you’re",
  headlineAccent: "coming",
  headlineSuffix: ".",
  intro: (
    <>
      I promise this is the only form you’ll have to fill in. RSVPs by{" "}
      <strong>October 3</strong>, please — so I can plan the table and the
      playlist.
    </>
  ),
  directLine: {
    label: "Direct Line",
    lines: [
      <>text Quyen · +1 347 555 0184</>,
      <>quyen@thereunion.club</>,
    ],
  },
  thanksHeadlineLead: "I knew it.",
  thanksHeadlineAccent: "I’m so glad.",
  thanksMessage:
    "You’ll get a little note from me a few days before. Until then — start thinking of your story.",
  submitLabel: "Send my reply",
  editLabel: "Edit my reply",
};

const galleryProps = {
  eyebrow: "After The Night",
  headlineLead: "The Sunday Morning",
  headlineAccent: "gallery",
  lede:
    "This space will fill itself with the photos we took. Check back the morning after — and download anything you’d like to keep forever.",
  items: [
    { alt: "The arrival", placeholder: "The arrival", size: "tall" as const },
    { alt: "The table", placeholder: "The table" },
    { alt: "The toast", placeholder: "The toast" },
    {
      alt: "The whole group, finally",
      placeholder: "The whole group, finally",
      size: "wide" as const,
    },
    { alt: "Mid-laugh", placeholder: "Mid-laugh" },
    { alt: "The candles", placeholder: "The candles" },
    { alt: "The dance floor", placeholder: "The dance floor" },
    { alt: "The very last one", placeholder: "The very last one" },
  ],
  locked: {
    message: "The full gallery unlocks on October 18 at noon.",
    ctaLabel: "Download all photos",
  },
};

export function Homepage() {
  return (
    <>
      <TopBar {...topBarProps} />
      <main>
        <Hero {...heroProps} />
        <Invitation {...invitationProps} />
        <Details {...detailsProps} />
        <Schedule {...scheduleProps} />
        <Menu {...menuProps} />
        <RSVP {...rsvpProps} />
        <Gallery {...galleryProps} />
      </main>
      <Footer {...footerProps} />
    </>
  );
}
