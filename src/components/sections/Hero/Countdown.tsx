"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

type Props = {
  targetDate: string;
};

type Parts = { days: string; hours: string; mins: string; secs: string };

const PLACEHOLDER: Parts = { days: "--", hours: "--", mins: "--", secs: "--" };

function computeParts(target: Date, now: Date): Parts {
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return { days: pad(days), hours: pad(hours), mins: pad(mins), secs: pad(secs) };
}

export function Countdown({ targetDate }: Props) {
  const [parts, setParts] = useState<Parts>(PLACEHOLDER);

  useEffect(() => {
    const target = new Date(targetDate);
    const tick = () => setParts(computeParts(target, new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className={styles.countdown} aria-label="Zeit bis zur Feier">
      <div className={styles.cdUnit}>
        <div className={styles.cdNum}>{parts.days}</div>
        <div className={styles.cdLabel}>Tage</div>
      </div>
      <div className={styles.cdUnit}>
        <div className={styles.cdNum}>{parts.hours}</div>
        <div className={styles.cdLabel}>Stunden</div>
      </div>
      <div className={styles.cdUnit}>
        <div className={styles.cdNum}>{parts.mins}</div>
        <div className={styles.cdLabel}>Minuten</div>
      </div>
      <div className={styles.cdUnit}>
        <div className={styles.cdNum}>{parts.secs}</div>
        <div className={styles.cdLabel}>Sekunden</div>
      </div>
    </div>
  );
}
