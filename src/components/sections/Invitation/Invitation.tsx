import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Invitation.module.scss";

type Photo = { src: string; alt: string };

type Props = {
  photo?: Photo;
  photoPlaceholder?: string;
  frameTag: string;
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  paragraphs: string[];
  signature: string;
  signatureRole: string;
};

export function Invitation({
  photo,
  photoPlaceholder = "Legt euer liebstes Gruppenfoto hier ab",
  frameTag,
  eyebrow,
  headlineLead,
  headlineAccent,
  paragraphs,
  signature,
  signatureRole,
}: Props) {
  return (
    <section className={styles.section} id="invitation">
      <div className={styles.container}>
        <Reveal>
          <figure className={styles.photo}>
            <div className={styles.photoFrame}>
              {photo ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className={styles.photoImg}
                />
              ) : (
                <span className={styles.photoPlaceholder} aria-hidden="true">
                  {photoPlaceholder}
                </span>
              )}
            </div>
            <figcaption className={styles.frameTag}>{frameTag}</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <article className={styles.letter}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 className={styles.headline}>
              {headlineLead}{" "}
              <em className={styles.accent}>{headlineAccent}</em>,
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}
            <p className={styles.signature}>— {signature}</p>
            <p className={styles.signatureRole}>{signatureRole}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
