"use client";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>HP-Wiki</div>

      <nav className={styles.nav}>
        <Link href="/characters">Characters</Link>
        <Link href="/spells">Spells</Link>
      </nav>
    </header>
  );
}
