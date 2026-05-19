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
  mark: "Mädels-Treffen · 2026",
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
    "Diese Seite ist eine stille kleine Ecke des Internets, nur für uns. Teilt den Link nicht — und bringt am Siebzehnten euer sanftestes Selbst mit.",
  meta: [
    "Mädels-Treffen · MMXXVI",
    <>
      Mit <HeartDot /> und Liebe gemacht, von eurer Gastgeberin
    </>,
    "quyen@thereunion.club",
  ],
};

const heroProps = {
  eyebrow: "Ein intimes Beisammensein · 17. Oktober 2026",
  headlineLead: "Mädels",
  headlineAccent: "Treffen",
  headlineSuffix: "zwanzig · sechsundzwanzig",
  subtitle:
    "Sechs Frauen, unzählige Erinnerungen, ein unvergesslicher Abend — endlich wieder vereint, unter einem warmen Dach.",
  eventDate: "2026-10-17T19:00:00",
  meta: [
    { label: "Samstag", value: "17 · Oktober · 2026" },
    { label: "Ab", value: "19 Uhr abends" },
    { label: "Bei", value: "Quyen zu Hause, Brooklyn" },
  ],
  primaryCta: { label: "Jetzt antworten", href: "#rsvp" },
  secondaryCta: { label: "Details ansehen", href: "#details" },
};

const invitationProps = {
  frameTag: "verbunden seit Schulzeiten",
  eyebrow: "Ein Brief von der Gastgeberin",
  headlineLead: "Meine liebsten",
  headlineAccent: "sechs",
  paragraphs: [
    "Es ist viel zu lange her, dass wir alle im selben Raum waren — zu laut lachend, einander die Sätze beendend und uns weigernd, die Küche zu verlassen.",
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
          Samstag, <em>17. Oktober</em>
          <br />
          19:00 Uhr — bis spät
        </>
      ),
      sub: "Essen pünktlich um 20 Uhr. Bitte kommt nicht zu früh.",
    },
    {
      num: "ii.",
      label: "Adresse",
      primary: (
        <>
          12 Linden Lane
          <br />
          Brooklyn, NY 11215
        </>
      ),
      sub: "Brownstone, Eingang auf Gartenebene, sucht nach der Lampe.",
    },
    {
      num: "iii.",
      label: "Parken",
      primary: (
        <>
          Kostenlos auf der Straße
          <br />
          ab 19 Uhr
        </>
      ),
      sub: "Linden Lane & 7th Avenue — die einfachsten Blöcke.",
    },
    {
      num: "iv.",
      label: "Öffentliche Verkehrsmittel",
      primary: (
        <>
          F oder G bis <em>7th Avenue</em>
          <br />
          4 Minuten zu Fuß
        </>
      ),
      sub: "Letzter Zug zurück: 1:48 Uhr. Oder bleibt einfach über Nacht.",
    },
    {
      num: "v.",
      label: "Kleidung",
      primary: (
        <>
          Gemütlich <em>elegant</em>
          <br />
          Weiche Stoffe, warme Töne
        </>
      ),
      sub: "Hausschuhe gibt es an der Tür.",
    },
    {
      num: "vi.",
      label: "Mitbringen",
      primary: (
        <>
          Euch selbst
          <br />+ eine Erinnerung zum Teilen
        </>
      ),
      sub: "Optional: ein Snack oder eine Flasche, die ihr liebt.",
    },
  ],
};

const scheduleProps = {
  eyebrow: "Der Abend",
  headlineLead: "Ein lockerer Plan,",
  headlineAccent: "locker befolgt",
  items: [
    {
      time: "19:00",
      title: "Begrüßungsdrinks",
      note: "Sekt, Granatapfel-Spritz, etwas Warmes, falls es kalt ist.",
      highlight: true,
    },
    {
      time: "20:00",
      title: "Essen am langen Tisch",
      note: "Langsam, bei Kerzenschein, keine Handys — außer sie spielen Musik.",
    },
    {
      time: "21:30",
      title: "Erinnerungsmoment",
      note: "Eine Geschichte pro Person — wählt die, die wir euch nie vergessen lassen würden.",
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
          name: "Burrata & geröstete Feigen",
          desc: "Honig, Thymian, Sauerteig-Crostini.",
          tag: "V",
        },
        {
          name: "Geräuchertes Rote-Bete-Carpaccio",
          desc: "Walnuss, Orangenschale, weicher Ziegenkäse.",
          tag: "V · GF",
        },
        {
          name: "Warme Oliven & Marcona-Mandeln",
          desc: "Rosmarin, Meersalz, Zitronenschale.",
          tag: "VG · GF",
        },
      ],
    },
    {
      title: "Der Hauptgang",
      items: [
        {
          name: "Langsam geschmorte Rinderrippe",
          desc: "Rotwein-Reduktion, weiche Polenta, Gremolata.",
          tag: "GF",
        },
        {
          name: "Safran-Zitronen-Risotto",
          desc: "Parmigiano, angekohlter Lauch, braune Butter.",
          tag: "V · GF",
        },
        {
          name: "Geröstete alte Karottensorten",
          desc: "Tahini, Dukkah, Granatapfel.",
          tag: "VG · GF",
        },
      ],
    },
    {
      title: "Etwas Süßes",
      items: [
        {
          name: "Olivenöl-Kuchen",
          desc: "Zitrusglasur, kandierter Rosmarin.",
          tag: "V",
        },
        {
          name: "Dunkle Schokolade & Meersalz",
          desc: "70 % Valrhona, Maldon-Flocken.",
          tag: "VG · GF",
        },
        {
          name: "Espresso, Pfefferminztee, Digestifs",
          desc: "Wählt aus — wir bleiben noch eine Weile wach.",
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
          name: "Rot — Sangiovese, Toskana",
          desc: "Erdig, unkompliziert, wie gemacht für die Rinderrippe.",
        },
        {
          name: "Weiß — Albariño, Rías Baixas",
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
    "Ein Hinweis zu Allergien — schreibt es mir in eurer Antwort, und ich kümmere mich leise darum. Es wird immer etwas Wunderbares für euch zu essen geben.",
  allergyFootnote:
    "Wenn ihr eine Lieblingsflasche oder einen geliebten Familien-Snack habt — bringt ihn mit. Keine Pflicht, immer willkommen.",
};

const rsvpProps = {
  eyebrow: "Bitte antworten",
  headlineLead: "Sag mir, dass du",
  headlineAccent: "kommst",
  headlineSuffix: ".",
  intro: (
    <>
      Versprochen, das ist das einzige Formular, das ihr ausfüllen müsst.
      Antworten bitte bis zum <strong>3. Oktober</strong> — damit ich den Tisch
      und die Playlist planen kann.
    </>
  ),
  directLine: {
    label: "Direkter Draht",
    lines: [
      <>Schreibt Quyen · +1 347 555 0184</>,
      <>quyen@thereunion.club</>,
    ],
  },
  thanksHeadlineLead: "Ich wusste es.",
  thanksHeadlineAccent: "Ich freu mich so.",
  thanksMessage:
    "Ein paar Tage vorher bekommst du noch eine kleine Nachricht von mir. Bis dahin — überlegt euch eure Geschichte.",
  submitLabel: "Antwort senden",
  editLabel: "Antwort bearbeiten",
};

const galleryProps = {
  eyebrow: "Nach der Nacht",
  headlineLead: "Die Sonntagmorgen-",
  headlineAccent: "Galerie",
  lede:
    "Dieser Raum füllt sich mit den Fotos, die wir gemacht haben. Schaut am Morgen danach wieder vorbei — und ladet euch alles herunter, was ihr für immer behalten möchtet.",
  items: [
    { alt: "Das Ankommen", placeholder: "Das Ankommen", size: "tall" as const },
    { alt: "Der Tisch", placeholder: "Der Tisch" },
    { alt: "Der Toast", placeholder: "Der Toast" },
    {
      alt: "Die ganze Gruppe, endlich",
      placeholder: "Die ganze Gruppe, endlich",
      size: "wide" as const,
    },
    { alt: "Mitten im Lachen", placeholder: "Mitten im Lachen" },
    { alt: "Die Kerzen", placeholder: "Die Kerzen" },
    { alt: "Die Tanzfläche", placeholder: "Die Tanzfläche" },
    { alt: "Das allerletzte", placeholder: "Das allerletzte" },
  ],
  locked: {
    message: "Die vollständige Galerie wird am 18. Oktober um 12 Uhr freigeschaltet.",
    ctaLabel: "Alle Fotos herunterladen",
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
