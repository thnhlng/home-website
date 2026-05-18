import Image from "next/image";
import { SectionHead } from "@/components/ui/SectionHead";
import styles from "./Gallery.module.scss";

type GallerySize = "regular" | "tall" | "wide";

type GalleryItem = {
  alt: string;
  placeholder?: string;
  src?: string;
  size?: GallerySize;
};

type LockedNotice = {
  message: string;
  ctaLabel: string;
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  lede?: string;
  items: GalleryItem[];
  locked?: LockedNotice;
};

function sizeClass(size: GallerySize | undefined) {
  if (size === "tall") return styles.itemTall;
  if (size === "wide") return styles.itemWide;
  return undefined;
}

export function Gallery({
  eyebrow,
  headlineLead,
  headlineAccent,
  lede,
  items,
  locked,
}: Props) {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <SectionHead
          eyebrow={eyebrow}
          headlineLead={headlineLead}
          headlineAccent={headlineAccent}
          lede={lede}
        />

        <div className={styles.grid}>
          {items.map((item, i) => {
            const sized = sizeClass(item.size);
            const className = sized
              ? `${styles.item} ${sized}`
              : styles.item;
            return (
              <figure key={i} className={className}>
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className={styles.itemImg}
                  />
                ) : (
                  <span className={styles.placeholder} aria-hidden="true">
                    {item.placeholder ?? item.alt}
                  </span>
                )}
              </figure>
            );
          })}
        </div>

        {locked && (
          <aside className={styles.locked}>
            <p className={styles.lockedText}>{locked.message}</p>
            <button type="button" className={styles.lockedCta} disabled>
              {locked.ctaLabel}
            </button>
          </aside>
        )}
      </div>
    </section>
  );
}
