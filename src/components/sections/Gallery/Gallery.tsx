import Image from "next/image";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
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
  ctaLabel?: string;
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
        <Reveal>
          <SectionHead
            eyebrow={eyebrow}
            headlineLead={headlineLead}
            headlineAccent={headlineAccent}
            lede={lede}
          />
        </Reveal>

        {items.length > 0 && (
          <Reveal delay={120}>
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
          </Reveal>
        )}

        {locked && (
          <Reveal delay={200}>
            <aside className={styles.locked}>
              <p className={styles.lockedText}>{locked.message}</p>
              {locked.ctaLabel && (
                <button type="button" className={styles.lockedCta} disabled>
                  {locked.ctaLabel}
                </button>
              )}
            </aside>
          </Reveal>
        )}
      </div>
    </section>
  );
}
