"use client";
import { useEffect, useState } from "react";
import HouseCharacterCard from "@/components/house/HouseCharacterCard";
import styles from "./styles.module.scss";

type BloodStatus = "pure-blood" | "half-blood" | "muggle-born";

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
  alive?: boolean;
  ancestry?: string;
};

const allowedBloodStatuses: BloodStatus[] = [
  "pure-blood",
  "half-blood",
  "muggle-born",
];

function toValidBloodStatus(
  input: string | undefined
): BloodStatus | undefined {
  return allowedBloodStatuses.includes(input as BloodStatus)
    ? (input as BloodStatus)
    : undefined;
}

export default function AllCharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
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
            bloodStatus={toValidBloodStatus(char.ancestry)}
          />
        ))}
      </div>
    </div>
  );
}
