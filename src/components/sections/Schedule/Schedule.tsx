import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Schedule.module.scss";

type ScheduleItem = {
  time: string;
  title: string;
  note: string;
  highlight?: boolean;
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  items: ScheduleItem[];
};

export function Schedule({
  eyebrow,
  headlineLead,
  headlineAccent,
  items,
}: Props) {
  return (
    <section className={styles.section} id="schedule">
      <div className={styles.container}>
        <Reveal>
          <SectionHead
            eyebrow={eyebrow}
            headlineLead={headlineLead}
            headlineAccent={headlineAccent}
          />
        </Reveal>

        <Reveal delay={120}>
          <ol className={styles.timeline}>
            {items.map((item) => (
              <li
                key={item.time}
                className={
                  item.highlight
                    ? `${styles.item} ${styles.highlight}`
                    : styles.item
                }
              >
                <span className={styles.time}>{item.time}</span>
                <span className={styles.dot} aria-hidden="true" />
                <div className={styles.body}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.note}>{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
