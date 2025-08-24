import React from "react";
import styles from "./Hero.module.css";
import Button from "./Button";
import { IoFlashOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <Button className={styles.heroBtn}>
        <p>Powered by Sei</p>
        <IoFlashOutline />
      </Button>
      <h1 className={styles.heroTitle}>Your AI-Powered Gateway</h1>
      <h1 className={styles.heroSubTitle}>to the Sei Blockchain</h1>
      <p className={styles.heroText}>
        Fetch Sei blockchain data, track transactions, and <br />
        explore insights—instantly via chat.
      </p>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="what is the price of sei token"
        />
      </div>
    </section>
  );
}
