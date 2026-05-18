import type { ReactNode } from "react";
import { Fleuron } from "@/components/ui/Fleuron";
import styles from "./Details.module.scss";

type DetailItem = {
  num: string;
  label: string;
  primary: ReactNode;
  sub: string;
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  items: DetailItem[];
};

export function Details({
  eyebrow,
  headlineLead,
  headlineAccent,
  items,
}: Props) {
  return (
    <section className={styles.section} id="details">
      <div className={styles.container}>
        <header className={styles.head}>
          <Fleuron />
          <span className={styles.caps}>{eyebrow}</span>
          <h2 className={styles.headline}>
            {headlineLead} <em className={styles.accent}>{headlineAccent}</em>
          </h2>
        </header>

        <div className={styles.grid}>
          {items.map((item) => (
            <article className={styles.card} key={item.num}>
              <span className={styles.num}>{item.num}</span>
              <h3 className={styles.label}>{item.label}</h3>
              <p className={styles.primary}>{item.primary}</p>
              <p className={styles.sub}>{item.sub}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
