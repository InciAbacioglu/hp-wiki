import React from "react";
import styles from "./HouseInfoCard.module.scss";

type Props = {
  house: string;
};

const houseInfo = {
  gryffindor: {
    name: "Gryffindor",
    description:
      "Gryffindor values courage, bravery, nerve, and chivalry. Its mascot is the lion and its colors are scarlet and gold.",
    image: "/gryffindor-logo.png",
  },
  slytherin: {
    name: "Slytherin",
    description:
      "Slytherin values ambition, cunning, leadership, and resourcefulness. Its mascot is the serpent and its colors are green and silver.",
    image: "/slytherin-logo.png",
  },
  hufflepuff: {
    name: "Hufflepuff",
    description:
      "Hufflepuff values hard work, patience, loyalty, and fair play. Its mascot is the badger and its colors are yellow and black.",
    image: "/hufflepuff-logo.png",
  },
  ravenclaw: {
    name: "Ravenclaw",
    description:
      "Ravenclaw values intelligence, learning, wisdom, and wit. Its mascot is the eagle and its colors are blue and bronze.",
    image: "/ravenclaw-logo.png",
  },
};

export default function HouseInfoCard({ house }: Props) {
  const info = houseInfo[house.toLowerCase() as keyof typeof houseInfo];

  if (!info) return null;

  return (
    <div className={styles.card}>
      <img src={info.image} alt={info.name} className={styles.image} />
      <div className={styles.text}>
        <h2>{info.name}</h2>
        <p>{info.description}</p>
      </div>
    </div>
  );
}
