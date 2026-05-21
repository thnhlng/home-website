import type { ReactNode } from "react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Details.module.scss";

type DetailItem = {
  num: string;
  label: string;
  primary: ReactNode;
  sub: string;
  mapKey?: string;
  cta?: { href: string; label: string };
  wide?: boolean;
};

type MapEmbed = {
  src: string;
  title: string;
  link?: string;
  label?: string;
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  items: DetailItem[];
  parkingMap?: MapEmbed;
};

export function Details({
  eyebrow,
  headlineLead,
  headlineAccent,
  items,
  parkingMap,
}: Props) {
  return (
    <section className={styles.section} id="details">
      <div className={styles.container}>
        <Reveal>
          <SectionHead
            eyebrow={eyebrow}
            headlineLead={headlineLead}
            headlineAccent={headlineAccent}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.grid}>
            {items.map((item) => {
              const showMap = item.mapKey === "parking" && parkingMap;
              const cardClass = item.wide
                ? `${styles.card} ${styles.cardWide}`
                : styles.card;
              return (
                <article className={cardClass} key={item.num}>
                  <div className={styles.cardBody}>
                    <span className={styles.num}>{item.num}</span>
                    <h3 className={styles.label}>{item.label}</h3>
                    <p className={styles.primary}>{item.primary}</p>
                    {item.sub && <p className={styles.sub}>{item.sub}</p>}
                    {item.cta && (
                      <a
                        href={item.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cta}
                      >
                        {item.cta.label} →
                      </a>
                    )}
                  </div>
                  {showMap && (
                    <div className={styles.map}>
                      <iframe
                        src={parkingMap.src}
                        title={parkingMap.title}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className={styles.mapFrame}
                      />
                      {parkingMap.link && (
                        <a
                          href={parkingMap.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.mapLink}
                        >
                          {parkingMap.label ?? "In Google Maps öffnen"} →
                        </a>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
