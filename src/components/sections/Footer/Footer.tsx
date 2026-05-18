import type { ReactNode } from "react";
import styles from "./Footer.module.scss";

type Props = {
  pill: string;
  headline: ReactNode;
  message: string;
  meta: ReactNode[];
};

export function Footer({ pill, headline, message, meta }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.pill}>
          <span className={styles.pillDot} aria-hidden="true" />
          {pill}
        </span>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.message}>{message}</p>

        <div className={styles.meta}>
          {meta.map((item, i) => (
            <span key={i} className={styles.metaItem}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function HeartDot() {
  return <span className={styles.heart} aria-hidden="true" />;
}
