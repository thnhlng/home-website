import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RSVPForm } from "./RSVPForm";
import styles from "./RSVP.module.scss";

type DirectLine = {
  label: string;
  lines: ReactNode[];
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  headlineSuffix?: string;
  intro: ReactNode;
  directLine?: DirectLine;
  thanksHeadlineLead: string;
  thanksHeadlineAccent: string;
  thanksMessage: string;
  submitLabel: string;
  editLabel: string;
};

export function RSVP({
  eyebrow,
  headlineLead,
  headlineAccent,
  headlineSuffix,
  intro,
  directLine,
  thanksHeadlineLead,
  thanksHeadlineAccent,
  thanksMessage,
  submitLabel,
  editLabel,
}: Props) {
  return (
    <section className={styles.section} id="rsvp">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.side}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 className={styles.headline}>
              {headlineLead}{" "}
              <em className={styles.accent}>{headlineAccent}</em>
              {headlineSuffix}
            </h2>
            <p className={styles.intro}>{intro}</p>

            {directLine && (
              <div className={styles.directLine}>
                <span className={styles.directLabel}>{directLine.label}</span>
                {directLine.lines.map((line, i) => (
                  <p key={i} className={styles.directLineRow}>
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <RSVPForm
            thanksHeadlineLead={thanksHeadlineLead}
            thanksHeadlineAccent={thanksHeadlineAccent}
            thanksMessage={thanksMessage}
            submitLabel={submitLabel}
            editLabel={editLabel}
          />
        </Reveal>
      </div>
    </section>
  );
}
