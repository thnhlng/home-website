import type { ReactNode } from "react";
import { Fleuron } from "@/components/ui/Fleuron";
import styles from "./SectionHead.module.scss";

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  lede?: ReactNode;
  tone?: "light" | "dark";
};

export function SectionHead({
  eyebrow,
  headlineLead,
  headlineAccent,
  lede,
  tone = "light",
}: Props) {
  const className =
    tone === "dark" ? `${styles.head} ${styles.dark}` : styles.head;

  return (
    <header className={className}>
      <Fleuron />
      <span className={styles.caps}>{eyebrow}</span>
      <h2 className={styles.headline}>
        {headlineLead} <em className={styles.accent}>{headlineAccent}</em>
      </h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </header>
  );
}
