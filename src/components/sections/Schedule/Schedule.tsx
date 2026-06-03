"use client";

import { useEffect, useState } from "react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Schedule.module.scss";

type ScheduleItem = {
  time: string;
  title: string;
  note: string;
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  items: ScheduleItem[];
  date: string;
};

function computeActiveIndex(
  items: ScheduleItem[],
  date: string,
  now: Date,
): number {
  if (items.length === 0) return -1;
  const nowMs = now.getTime();
  let active = 0;
  for (let i = 0; i < items.length; i++) {
    const itemMs = new Date(`${date}T${items[i].time}:00`).getTime();
    if (itemMs <= nowMs) {
      active = i;
    } else {
      break;
    }
  }
  return active;
}

export function Schedule({
  eyebrow,
  headlineLead,
  headlineAccent,
  items,
  date,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const update = () =>
      setActiveIndex(computeActiveIndex(items, date, new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, [items, date]);

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
            {items.map((item, i) => (
              <li
                key={item.time}
                className={
                  i === activeIndex
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
