import React from "react";
import styles from "./InfoCards.module.css";

export default function InfoCards({ title, description, children }) {
  return (
    <div className={styles.info}>
      <h3 className={styles.infoTitle}>{title}</h3>
      <p className={styles.infoDescription}>{description}</p>
      {children}
    </div>
  );
}
