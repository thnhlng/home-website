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

function getSectionId(href: string): string | null {
  return href.startsWith("#") && href.length > 1 ? href.slice(1) : null;
}

export function TopBar({ mark, links }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const ids = links
      .map((l) => getSectionId(l.href))
      .filter((id): id is string => id !== null);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        // Pick the first visible section in document order so we don't flicker
        // between two simultaneously-visible neighbours.
        for (const id of ids) {
          if (visible.has(id)) {
            setActiveHref(`#${id}`);
            return;
          }
        }
        setActiveHref(null);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={scrolled ? `${styles.topbar} ${styles.scrolled}` : styles.topbar}
    >
      <Link href="#top" className={styles.mark} onClick={closeMenu}>
        {mark}
      </Link>

      <nav className={styles.nav} aria-label="Hauptnavigation">
        {links.map((link) => {
          const active = activeHref === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                active ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
              }
              aria-current={active ? "location" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        className={styles.menuToggle}
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={menuOpen}
        aria-controls="topbar-drawer"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span
          className={
            menuOpen ? `${styles.bars} ${styles.barsOpen}` : styles.bars
          }
        />
      </button>

      <div
        id="topbar-drawer"
        className={
          menuOpen ? `${styles.drawer} ${styles.drawerOpen}` : styles.drawer
        }
      >
        <nav className={styles.drawerNav} aria-label="Mobile Navigation">
          {links.map((link) => {
            const active = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? `${styles.drawerLink} ${styles.drawerLinkActive}`
                    : styles.drawerLink
                }
                aria-current={active ? "location" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
