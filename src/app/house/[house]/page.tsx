"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HouseCharacterCard from "@/components/house/HouseCharacterCard";
import HouseInfoCard from "@/components/house/HouseInfoCard";
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

export default function HousePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
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
        {/* BAŞLIK TAMAMEN KALDIRILDI */}
        <div className={styles.cardGrid}>
          {characters.map((char) => (
            <HouseCharacterCard
              key={char.name + char.dateOfBirth}
              {...char}
              bloodStatus={toValidBloodStatus(char.ancestry)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
