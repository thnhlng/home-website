import { TopBar } from "@/components/sections/TopBar";
import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { Details } from "@/components/sections/Details";
import { Schedule } from "@/components/sections/Schedule";
import { Menu } from "@/components/sections/Menu";
import { RSVP } from "@/components/sections/RSVP";
import { Gallery } from "@/components/sections/Gallery";
import { Footer, HeartDot } from "@/components/sections/Footer";
import groupPhoto from "@/assets/groupphoto.jpeg";

const topBarProps = {
  mark: "Fürobebier-Girls · 2026",
  links: [
    { label: "Einladung", href: "#invitation" },
    { label: "Details", href: "#details" },
    { label: "Abend", href: "#schedule" },
    { label: "Menü", href: "#menu" },
    { label: "Antwort", href: "#rsvp" },
    { label: "Galerie", href: "#gallery" },
  ],
};

const footerProps = {
  pill: "Eine private Seite · nur für uns sechs",
  headline: (
    <>
      Ich freue mich auf EUCH
      <br />
    </>
  ),
  message:
    "Diese Seite ist eine stille kleine Ecke des Internets, nur für uns. Teilt den Link nicht, und bringt am Zwanzigsten euer sanftestes Selbst mit.",
  meta: [
    "Fürobebier-Girls · MMXXVI",
    <>
      Mit <HeartDot /> und Liebe gemacht, von eurer Gastgeberin
    </>,
  ],
};

const heroProps = {
  eyebrow: "Ein Wiedersehen · 20. Juni 2026",
  headlineLead: "Fürobebier",
  headlineAccent: "Girls",
  headlineSuffix: "zwanzig · sechsundzwanzig",
  subtitle:
    "Wir finden den Weg aus einem spannenden Escape Room und füllen uns den Bauch mit vietnamesischen Köstlichkeiten bei mir zu Hause.",
  eventDate: "2026-06-20T16:00:00",
  meta: [
    { label: "Samstag", value: "20 · Juni · 2026" },
    { label: "Ab", value: "16:00 Uhr" },
    { label: "Bei", value: "Bei Thanh Long und Quyen" },
  ],
  primaryCta: { label: "Jetzt antworten", href: "#rsvp" },
  secondaryCta: { label: "Details ansehen", href: "#details" },
};

const invitationProps = {
  photo: {
    src: groupPhoto,
    alt: "Gruppenfoto der sechs Freundinnen",
  },
  frameTag: "verbunden seit Schulzeiten",
  eyebrow: "Ein Brief von der Gastgeberin",
  headlineLead: "Meine liebsten",
  headlineAccent: "Freunde",
  paragraphs: [
    "Seit unserer Zeit an der Kanti Sursee, begleitet uns eine besondere Freundschaft voller Lebensfreude, gemeinsamer Erinnerungen und schöner Momente. Umso mehr freue ich mich heute, euch als Gastgeberin willkommen zu heissen und wieder Zeit miteinander zu verbringen.",
    "Besonders freue ich mich auch, einen Teil meiner vietnamesischen Kultur durch das Essen mit euch zu teilen und gemeinsam zu geniessen.",
    "Danke, dass ihr da seid. Auf viele weitere unvergessliche Augenblicke zusammen.",
  ],
  signature: "Quyen",
  signatureRole: "Eure Gastgeberin, Freundin & Escaper",
};

const detailsProps = {
  eyebrow: "Die Einzelheiten",
  headlineLead: "Alles, was ihr",
  headlineAccent: "wissen müsst",
  items: [
    {
      num: "i.",
      label: "Datum & Uhrzeit",
      primary: (
        <>
          Samstag, <em>20. Juni</em>
          <br />
          16:00 Uhr, bis spät
        </>
      ),
      sub: "16:30 Uhr fängt der Escape Room an.",
    },
    {
      num: "ii.",
      label: "Mitbringen",
      primary: <>Euch selbst</>,
      sub: "und gute Laune.",
    },
    {
      num: "iii.",
      label: "Öffentliche Verkehrsmittel",
      primary: (
        <>
          Vom <em>Bahnhof Lenzburg</em>
          <br />
          zum Gustav Zeiler-Ring 18
        </>
      ),
      sub: "Von dort sind es nur 6 Minuten zu Fuss zu uns.",
      cta: {
        href: "https://www.google.com/maps/dir/?api=1&origin=Bahnhof+Lenzburg&destination=Gustav+Zeiler-Ring+18,+5600+Lenzburg&travelmode=walking",
        label: "Route in Google Maps",
      },
    },
    {
      num: "iv.",
      label: "Parken",
      primary: <>Kostenlos auf der Strasse</>,
      sub: "Hier könnt ihr parkieren.",
      mapKey: "parking",
      wide: true,
    },
  ],
  parkingMap: {
    src: "https://www.google.com/maps?q=47.390396,8.174247&hl=de&z=16&output=embed",
    title: "Parkplatz in Lenzburg",
    link: "https://maps.app.goo.gl/N4qBNzdmbts22TXCA",
    label: "Zum Parkplatz",
  },
};

const scheduleProps = {
  eyebrow: "Der Abend",
  headlineLead: "Ein lockerer Plan,",
  headlineAccent: "locker befolgt",
  items: [
    {
      time: "16:00",
      title: "Eintreffen",
      note: "",
      highlight: true,
    },
    {
      time: "16:15",
      title: "Escape Room",
      note: "",
    },
    {
      time: "18:00",
      title: "Apéro und Plaudern",
      note: "",
    },
    {
      time: "18:45",
      title: "Essen, chillen bis spät",
      note: "",
    },
  ],
};

const menuProps = {
  eyebrow: "Am Tisch",
  headlineLead: "Essen, in Ruhe,",
  headlineAccent: "gemeinsam",
  columns: [
    {
      title: "Zum Auftakt",
      items: [
        {
          name: "Vietnamesische Fingerfood",
          desc: "Knusprige Frühlingsrollen und weitere kleine vietnamesische Klassiker zum Ankommen.",
        },
      ],
    },
    {
      title: "Der Hauptgang",
      items: [
        {
          name: "Do it yourself Sommerrollen",
          desc: "Reispapier, frische Kräuter, knackiges Gemüse. Jede rollt sich ihre eigene.",
        },
      ],
    },
    {
      title: "Etwas Süsses",
      items: [
        {
          name: "Überraschung",
          desc: "Ein süsses Geheimnis zum Abschluss. Lasst euch verzaubern.",
        },
      ],
    },
    {
      title: "Zum Ausschenken",
      items: [
        {
          name: "Softgetränke",
          desc: "Cola, Cola Zero, Migros Eistee etc.",
        },
        {
          name: "Lenzi Hahnenburger",
          desc: "Qualitätives Wasser aus Lenzburg",
        },
        {
          name: "Litchi Spritz",
          desc: "Optional: mit Schuss",
        },
      ],
    },
  ],
  allergyNote:
    "Ein Hinweis zu Allergien: schreibt es mir in eurer Antwort, und ich kümmere mich leise darum. Es wird immer etwas Wunderbares für euch zu essen geben.",
  allergyFootnote:
    "Wenn ihr eine Lieblingsflasche oder einen geliebten Familien-Snack habt, bringt ihn mit. Keine Pflicht, immer willkommen.",
};

const rsvpProps = {
  eyebrow: "Bitte antworten",
  headlineLead: "Sag mir, dass du",
  headlineAccent: "kommst",
  headlineSuffix: ".",
  intro: (
    <>
      Nur eine Bitte: Verratet mir euren Lieblingssong für die Playlist, damit
      der Abend nach uns klingt. Antworten bitte bis zum{" "}
      <strong>6. Juni</strong>.
    </>
  ),
  thanksHeadlineLead: "Yes! Dein Song",
  thanksHeadlineAccent: "ist auf der Liste.",
  thanksMessage: "Dein Song ist gesichert. Wir sehen uns am 20. Juni!",
  submitLabel: "Song einreichen",
  editLabel: "Antwort bearbeiten",
};

const galleryProps = {
  eyebrow: "Nach der Nacht",
  headlineLead: "Die Sonntagmorgen-",
  headlineAccent: "Galerie",
  lede: "Dieser Raum füllt sich mit den Fotos, die wir gemacht haben. Schaut am Morgen danach wieder vorbei, und ladet euch alles herunter, was ihr für immer behalten möchtet.",
  items: [],
  locked: {
    message:
      "Die Fotos werden am Tag nach unserem Abend hochgeladen — schaut am Sonntag, 21. Juni, wieder vorbei.",
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
