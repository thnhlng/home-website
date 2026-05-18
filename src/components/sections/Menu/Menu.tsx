import { SectionHead } from "@/components/ui/SectionHead";
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
        <SectionHead
          eyebrow={eyebrow}
          headlineLead={headlineLead}
          headlineAccent={headlineAccent}
          tone="dark"
        />

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

        <aside className={styles.allergy}>
          <p className={styles.allergyText}>{allergyNote}</p>
          {allergyFootnote && (
            <p className={styles.allergyFootnote}>{allergyFootnote}</p>
          )}
        </aside>
      </div>
    </section>
  );
}
