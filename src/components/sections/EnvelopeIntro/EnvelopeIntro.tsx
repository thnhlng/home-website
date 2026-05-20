"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./EnvelopeIntro.module.scss";

type Phase =
  | "idle"
  | "opening"
  | "letterOut"
  | "unfolding"
  | "expanding"
  | "done";

type Props = {
  monogram: string;
  addressLine: string;
  letterPreview: ReactNode;
  openLabel: string;
  skipLabel: string;
  hint: string;
  onComplete: () => void;
};

const FULL_SEQUENCE: Array<{ at: number; phase: Phase }> = [
  { at: 500, phase: "letterOut" },
  { at: 1100, phase: "unfolding" },
  { at: 1500, phase: "expanding" },
  { at: 2700, phase: "done" },
];

const REDUCED_SEQUENCE: Array<{ at: number; phase: Phase }> = [
  { at: 600, phase: "expanding" },
  { at: 1300, phase: "done" },
];

export function EnvelopeIntro({
  monogram,
  addressLine,
  letterPreview,
  openLabel,
  skipLabel,
  hint,
  onComplete,
}: Props) {
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const completedRef = useRef(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
      return;
    }
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "done" && !completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  }, [phase, onComplete]);

  const start = useCallback(() => {
    setPhase((current) => {
      if (current !== "idle") return current;
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const sequence = reduced ? REDUCED_SEQUENCE : FULL_SEQUENCE;
      for (const step of sequence) {
        timers.current.push(
          setTimeout(() => setPhase(step.phase), step.at),
        );
      }
      return reduced ? "expanding" : "opening";
    });
  }, []);

  const skip = useCallback(() => {
    clearTimers();
    setPhase("done");
  }, [clearTimers]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skip();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [skip]);

  if (phase === "done") return null;

  const interactive = phase === "idle";

  return (
    <div
      className={styles.stage}
      data-phase={phase}
      role="dialog"
      aria-modal="true"
      aria-label={openLabel}
    >
      <button
        type="button"
        className={styles.skip}
        onClick={skip}
      >
        {skipLabel}
        <span aria-hidden="true"> →</span>
      </button>

      <button
        type="button"
        className={styles.envelope}
        onClick={start}
        aria-label={openLabel}
        disabled={!interactive}
      >
        <span className={styles.back} aria-hidden="true" />
        <span className={styles.letter}>
          <span className={styles.letterInner}>
            <span className={styles.letterMonogram}>{monogram}</span>
            <span className={styles.letterRule} aria-hidden="true" />
            <span className={styles.letterPreview}>{letterPreview}</span>
          </span>
        </span>
        <span className={styles.body} aria-hidden="true" />
        <span className={styles.flap} aria-hidden="true">
          <span className={styles.seal}>{monogram}</span>
        </span>
      </button>

      <p className={styles.address}>{addressLine}</p>
      <p className={styles.hint} aria-hidden="true">
        {hint}
      </p>
    </div>
  );
}
