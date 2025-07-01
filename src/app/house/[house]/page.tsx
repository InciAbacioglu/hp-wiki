"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HouseCharacterCard from "@/components/house/HouseCharacterCard";
import HouseInfoCard from "@/components/house/HouseInfoCard";
import styles from "./styles.module.scss";

export default function HousePage() {
  const [characters, setCharacters] = useState<any[]>([]);
  const { house } = useParams();

  useEffect(() => {
    if (!house) return;
    fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
      .then((res) => res.json())
      .then(setCharacters);
  }, [house]);

  return (
    <div
      className={`${styles.container} ${
        styles[house?.toString() || "gryffindor"]
      }`}
    >
      <div className={styles.leftPanel}>
        <HouseInfoCard house={house?.toString() || "gryffindor"} />
      </div>
      <div className={styles.rightPanel}>
        <h1 className={styles.title}>{house?.toString()} House</h1>
        <div className={styles.cardGrid}>
          {characters.map((char) => (
            <HouseCharacterCard
              key={char.name + char.dateOfBirth}
              {...char}
              bloodStatus={char.ancestry}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
