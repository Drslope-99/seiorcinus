import React from "react";
import styles from "./ChatInputElement.module.css";

export default function ChatInputElement({ value, onChange }) {
  return (
    <div className={styles.searchInputContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="what is the price of sei token"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
