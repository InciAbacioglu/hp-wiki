"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface Spell {
  name: string;
  description: string;
}

export default function SpellsPage() {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/spells")
      .then((res) => res.json())
      .then(setSpells);
  }, []);

  const filtered = spells.filter((spell) =>
    spell.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Spells</h1>
      <input
        type="text"
        placeholder="Search spells..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.grid}>
        {filtered.map((spell) => (
          <div className={styles.card} key={spell.name}>
            <h3 className={styles.name}>{spell.name}</h3>
            <p className={styles.description}>{spell.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
