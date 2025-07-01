"use client";

import { useRouter } from "next/navigation";
import styles from "./LogoButtonsGroup.module.scss";

export default function LogoButtonsGroup() {
  const router = useRouter();

  const handleClick = (house: string) => {
    router.push(`/house/${house}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <button
          className={`${styles.invisibleButton} ${styles.gryffindor}`}
          onClick={() => handleClick("gryffindor")}
        />
        <button
          className={`${styles.invisibleButton} ${styles.slytherin}`}
          onClick={() => handleClick("slytherin")}
        />
        <button
          className={`${styles.invisibleButton} ${styles.ravenclaw}`}
          onClick={() => handleClick("ravenclaw")}
        />
        <button
          className={`${styles.invisibleButton} ${styles.hufflepuff}`}
          onClick={() => handleClick("hufflepuff")}
        />
      </div>
    </div>
  );
}
