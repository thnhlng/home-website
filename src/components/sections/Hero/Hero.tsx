import { Fragment } from "react";
import { Countdown } from "./Countdown";
import styles from "./Hero.module.scss";

type MetaItem = { label: string; value: string };

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  headlineSuffix: string;
  subtitle: string;
  eventDate: string;
  meta: MetaItem[];
};

export function Hero({
  eyebrow,
  headlineLead,
  headlineAccent,
  headlineSuffix,
  subtitle,
  eventDate,
  meta,
}: Props) {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.headline}>
          {headlineLead} <span className={styles.amp}>{headlineAccent}</span>{" "}
          <em className={styles.headlineSuffix}>{headlineSuffix}</em>
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>

        <Countdown targetDate={eventDate} />

        <div className={styles.heroMeta}>
          {meta.map((item, i) => (
            <Fragment key={item.label}>
              {i > 0 && <span className={styles.sep} aria-hidden="true" />}
              <div className={styles.heroMetaItem}>
                <span className={styles.caps}>{item.label}</span>
                <span className={styles.v}>{item.value}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
