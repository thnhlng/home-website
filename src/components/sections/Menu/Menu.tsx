import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Menu.module.scss";

type MenuItem = {
  name: string;
  desc: string;
  tag?: string;
};

type MenuColumn = {
  title: string;
  items: MenuItem[];
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  columns: MenuColumn[];
  allergyNote: string;
  allergyFootnote?: string;
};

export function Menu({
  eyebrow,
  headlineLead,
  headlineAccent,
  columns,
  allergyNote,
  allergyFootnote,
}: Props) {
  return (
    <section className={styles.section} id="menu">
      <div className={styles.container}>
        <Reveal>
          <SectionHead
            eyebrow={eyebrow}
            headlineLead={headlineLead}
            headlineAccent={headlineAccent}
            tone="dark"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.grid}>
            {columns.map((col) => (
              <div className={styles.col} key={col.title}>
                <h3 className={styles.colTitle}>{col.title}</h3>
                {col.items.map((item) => (
                  <article className={styles.item} key={item.name}>
                    <div>
                      <p className={styles.itemTitle}>{item.name}</p>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                    {item.tag && (
                      <span className={styles.itemTag}>{item.tag}</span>
                    )}
                  </article>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <aside className={styles.allergy}>
            <p className={styles.allergyText}>{allergyNote}</p>
            {allergyFootnote && (
              <p className={styles.allergyFootnote}>{allergyFootnote}</p>
            )}
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
