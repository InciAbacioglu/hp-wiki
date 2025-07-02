"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/hp-icon.png"
          alt="HP Logo"
          width={32}
          height={32}
          className={styles.icon}
        />
        <span className={styles.text}>-Wiki</span>
      </div>

      <nav className={styles.nav}>
        <Link href="/characters">Characters</Link>
        <Link href="/spells">Spells</Link>
      </nav>
    </header>
  );
}
