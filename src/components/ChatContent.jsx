import React from "react";
import styles from "./ChatContent.module.css";
import { RiMenu2Line } from "react-icons/ri";
import { HiOutlineCircleStack } from "react-icons/hi2";

export default function ChatContent({ onOpenNav }) {
  return (
    <div className={styles.chatContent}>
      <header className={styles.chatHeader}>
        <button className={styles.navToggle} onClick={onOpenNav}>
          <RiMenu2Line size={24} color="white" />
        </button>
        <button className={styles.btnCredits}>
          <HiOutlineCircleStack />
          <p>120 Credits</p>
        </button>
      </header>
    </div>
  );
}
