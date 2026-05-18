import type { ReactNode } from "react";
import { SectionHead } from "@/components/ui/SectionHead";
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
        <SectionHead
          eyebrow={eyebrow}
          headlineLead={headlineLead}
          headlineAccent={headlineAccent}
        />

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
