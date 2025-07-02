import React from "react";
import styles from "./HouseInfoCard.module.scss";

type Props = {
  house: string;
};

const houseInfo = {
  gryffindor: {
    name: "Gryffindor",
    founder: "Godric Gryffindor",
    description:
      "Gryffindor values courage, bravery, nerve, and chivalry. Its members are known for their daring and boldness, often leading with heart before reason. The house stands for doing what is right, even when it’s hard.",
    image: "/gryffindor-logo.png",
    founderImage: "/founders/gryffindor-founder.jpeg",
  },
  slytherin: {
    name: "Slytherin",
    founder: "Salazar Slytherin",
    description:
      "Slytherin values ambition, cunning, leadership, and resourcefulness. Its members are goal-driven, clever, and often strategic thinkers who aren’t afraid to do what it takes to achieve greatness.",
    image: "/slytherin-logo.png",
    founderImage: "/founders/slytherin-founder.jpeg",
  },
  hufflepuff: {
    name: "Hufflepuff",
    founder: "Helga Hufflepuff",
    description:
      "Hufflepuff values hard work, patience, loyalty, and fair play. Members of this house are often kind, inclusive, and dedicated, valuing effort over glory and collaboration over competition.",
    image: "/hufflepuff-logo.png",
    founderImage: "/founders/hufflepuff-founder.jpeg",
  },
  ravenclaw: {
    name: "Ravenclaw",
    founder: "Rowena Ravenclaw",
    description:
      "Ravenclaw values intelligence, learning, wisdom, and wit. Its members are known for their curiosity, sharp minds, and creative thinking, embracing knowledge and independent thought.",
    image: "/ravenclaw-logo.png",
    founderImage: "/founders/ravenclaw-founder.jpeg",
  },
};

export default function HouseInfoCard({ house }: Props) {
  const lowerCaseHouse = house.toLowerCase();
  const info = houseInfo[lowerCaseHouse as keyof typeof houseInfo];

  if (!info) return null;

  return (
    <div className={`${styles.card} ${styles[lowerCaseHouse]}`}>
      <div className={styles.images}>
        <img
          src={info.image}
          alt={`${info.name} logo`}
          className={styles.logo}
        />
        <div className={styles.founderSection}>
          <img
            src={info.founderImage}
            alt={info.founder}
            className={styles.founderImage}
          />
          <span className={styles.founderName}>{info.founder}</span>
        </div>
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>{info.name}</h2>
        <p className={styles.description}>{info.description}</p>
      </div>
    </div>
  );
}
