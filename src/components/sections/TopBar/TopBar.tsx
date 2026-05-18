"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./TopBar.module.scss";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  mark: string;
  links: NavLink[];
};

export function TopBar({ mark, links }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={scrolled ? `${styles.topbar} ${styles.scrolled}` : styles.topbar}
    >
      <Link href="#top" className={styles.mark}>
        {mark}
      </Link>
      <nav className={styles.nav} aria-label="Primary">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
