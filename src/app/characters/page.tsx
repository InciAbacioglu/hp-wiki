"use client";
import { useEffect, useState } from "react";
import HouseCharacterCard from "@/components/house/HouseCharacterCard";
import styles from "./styles.module.scss";

export default function AllCharactersPage() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then(setCharacters);
  }, []);

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Characters</h1>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search characters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.cardGrid}>
        {filteredCharacters.map((char) => (
          <HouseCharacterCard
            key={char.name + char.dateOfBirth}
            name={char.name}
            image={char.image}
            dateOfBirth={char.dateOfBirth}
            species={char.species}
            patronus={char.patronus}
            wand={char.wand}
            alive={char.alive}
            bloodStatus={char.ancestry}
          />
        ))}
      </div>
    </div>
  );
}
