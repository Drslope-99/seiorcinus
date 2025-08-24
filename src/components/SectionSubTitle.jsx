import React from "react";
import styles from "./SectionSubTitle.module.css";

export default function SectionSubTitle({ title }) {
  return <h2 className={styles.sectionSubTitle}>{title}</h2>;
}
