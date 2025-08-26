import React from "react";
import styles from "./ChatLayout.module.css";

export default function ChatLayout({ children }) {
  return <div className={styles.chatContainer}>{children}</div>;
}
