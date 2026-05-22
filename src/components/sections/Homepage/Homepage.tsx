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
      Danke, dass ihr die Menschen seid,
      <br />
      die ich jedes Mal wieder wählen würde, <em>immer und immer.</em>
    </>
  ),
  message:
    "Diese Seite ist eine stille kleine Ecke des Internets, nur für uns. Teilt den Link nicht, und bringt am Zwanzigsten euer sanftestes Selbst mit.",
  meta: [
    "Fürobebier-Girls · MMXXVI",
    <>
      Mit <HeartDot /> und Liebe gemacht, von eurer Gastgeberin
    </>,
    "quyen@thereunion.club",
  ],
};

const heroProps = {
  eyebrow: "Ein intimes Beisammensein · 20. Juni 2026",
  headlineLead: "Fürobebier",
  headlineAccent: "Girls",
  headlineSuffix: "zwanzig · sechsundzwanzig",
  subtitle:
    "Sechs Frauen, unzählige Erinnerungen, ein unvergesslicher Abend. Endlich wieder vereint, unter einem warmen Dach.",
  eventDate: "2026-06-20T19:00:00",
  meta: [
    { label: "Samstag", value: "20 · Juni · 2026" },
    { label: "Ab", value: "19 Uhr abends" },
    { label: "Bei", value: "Quyen zu Hause, Lenzburg" },
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
  headlineAccent: "sechs",
  paragraphs: [
    "Es ist viel zu lange her, dass wir alle im selben Raum waren: zu laut lachend, einander die Sätze beendend und uns weigernd, die Küche zu verlassen.",
    "Also räume ich meinen Kalender frei, zünde jede Kerze an, die ich besitze, und öffne mein Zuhause für die Frauen, die für mich Familie sind, solange ich denken kann. Kein Plan. Keine Förmlichkeiten. Nur wir, ein langer Tisch und die Art von Gesprächen, bei denen man die Zeit vergisst.",
    "Kommt hungrig. Kommt früh. Bringt die Geschichten mit.",
  ],
  signature: "Quyen",
  signatureRole: "Eure Gastgeberin, Freundin & Mitverschwörerin",
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
          19:00 Uhr, bis spät
        </>
      ),
      sub: "Essen pünktlich um 20 Uhr. Bitte kommt nicht zu früh.",
    },
    {
      num: "ii.",
      label: "Mitbringen",
      primary: <>Gute Laune und euch selbst</>,
      sub: "Optional: ein Snack oder eine Flasche, die ihr liebt.",
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
      primary: (
        <>
          Kostenlos auf der Strasse
          <br />
          ab 19 Uhr
        </>
      ),
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
      time: "19:00",
      title: "Begrüssungsdrinks",
      note: "Sekt, Granatapfel-Spritz, etwas Warmes, falls es kalt ist.",
      highlight: true,
    },
    {
      time: "20:00",
      title: "Essen am langen Tisch",
      note: "Langsam, bei Kerzenschein, keine Handys, ausser sie spielen Musik.",
    },
    {
      time: "21:30",
      title: "Erinnerungsmoment",
      note: "Eine Geschichte pro Person. Wählt die, die wir euch nie vergessen lassen würden.",
    },
    {
      time: "22:30",
      title: "Das berüchtigte Quiz",
      note: "Wie gut kennt ihr uns wirklich? Macht euch auf was gefasst.",
    },
    {
      time: "23:30",
      title: "Musik, Fotos & Gespräche bis spät",
      note: "Tanzfläche optional. Geflüsterte Geständnisse erwünscht.",
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
          name: "Champagner zum Empfang",
          desc: "Blanc de Blancs, eiskalt.",
        },
        {
          name: "Rot: Sangiovese, Toskana",
          desc: "Erdig, unkompliziert, wie gemacht für die Rinderrippe.",
        },
        {
          name: "Weiss: Albariño, Rías Baixas",
          desc: "Frisch, salzig, wie gemacht fürs Risotto.",
        },
        {
          name: "Alkoholfrei",
          desc: "Granatapfel-Spritz, Ingwer-Honig-Fizz, Kräuteraufgüsse.",
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
  thanksHeadlineLead: "Ich wusste es.",
  thanksHeadlineAccent: "Ich freu mich so.",
  thanksMessage:
    "Ein paar Tage vorher bekommst du noch eine kleine Nachricht von mir. Bis dahin: überlegt euch eure Geschichte.",
  submitLabel: "Antwort senden",
  editLabel: "Antwort bearbeiten",
};

const galleryProps = {
  eyebrow: "Nach der Nacht",
  headlineLead: "Die Sonntagmorgen-",
  headlineAccent: "Galerie",
  lede:
    "Dieser Raum füllt sich mit den Fotos, die wir gemacht haben. Schaut am Morgen danach wieder vorbei, und ladet euch alles herunter, was ihr für immer behalten möchtet.",
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
