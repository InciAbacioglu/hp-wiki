"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import HouseCharacterCard from "@/components/house/HouseCharacterCard";

type Character = {
  name: string;
  image: string;
  dateOfBirth?: string;
  species?: string;
  patronus?: string;
  wand?: {
    wood?: string;
    core?: string;
    length?: number;
  };
  house?: string;
};

export default function GryffindorPage() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://hp-api.onrender.com/api/characters/house/gryffindor"
      );

      const data = await res.json();
      setCharacters(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gryffindor House</h1>
      <div className={styles.cardGrid}>
        {characters.map((char, index) => (
          <HouseCharacterCard
            key={`${char.name}-${index}`}
            name={char.name}
            image={char.image}
            dateOfBirth={char.dateOfBirth}
            species={char.species}
            patronus={char.patronus}
            wand={
              char.wand
                ? `Wood: ${char.wand.wood}, Core: ${char.wand.core}, Length: ${char.wand.length}`
                : "Unknown"
            }
          />
        ))}
      </div>
    </div>
  );
}
