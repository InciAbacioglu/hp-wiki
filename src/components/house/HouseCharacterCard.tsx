import React from "react";
import styles from "./HouseCharacterCard.module.scss";
import { GiDeathSkull } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { PiDrop, PiDropHalf, PiDropFill } from "react-icons/pi";

type Props = {
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
  bloodStatus?: "pure-blood" | "half-blood" | "muggle-born";
};

const calculateAge = (birth: string): number | null => {
  const [day, month, year] = birth.split("-").map(Number);
  if (!year) return null;
  const today = new Date();
  let age = today.getFullYear() - year;
  if (
    today.getMonth() + 1 < month ||
    (today.getMonth() + 1 === month && today.getDate() < day)
  ) {
    age--;
  }
  return age;
};

export default function HouseCharacterCard({
  name,
  image,
  dateOfBirth,
  species,
  patronus,
  wand,
  alive = true,
  bloodStatus = "half-blood",
}: Props) {
  const safeImage =
    image && image.trim().length > 0 ? image : "/placeholder.png";

  return (
    <div className={styles.card}>
      <div className={styles.iconTopRight}>
        {alive ? (
          <FaHeart size={20} color="limegreen" />
        ) : (
          <GiDeathSkull size={20} color="crimson" />
        )}
      </div>
      <div className={styles.iconTopLeft}>
        {bloodStatus === "pure-blood" && <PiDropFill size={20} />}
        {bloodStatus === "half-blood" && <PiDropHalf size={20} />}
        {bloodStatus === "muggle-born" && <PiDrop size={20} />}
      </div>

      <img src={safeImage} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>

      <div className={styles.details}>
        {dateOfBirth && (
          <p>
            <strong>Birth:</strong> {dateOfBirth} ({calculateAge(dateOfBirth)}{" "}
            years old)
          </p>
        )}
        {species && (
          <p>
            <strong>Species:</strong> {species}
          </p>
        )}
        {patronus && (
          <p>
            <strong>Patronus:</strong> {patronus}
          </p>
        )}
        {wand && (wand.wood || wand.core || wand.length) && (
          <p>
            <strong>Wand:</strong> {wand.wood ? wand.wood : ""}
            {wand.core ? ` with a ${wand.core}` : ""}
            {wand.length ? ` (${wand.length} inches)` : ""}
          </p>
        )}
      </div>
    </div>
  );
}
