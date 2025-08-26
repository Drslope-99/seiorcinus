import React from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={`${styles.contactSection} container`}>
      <h2 className={styles.contactTitle}>Integrations and platforms</h2>
      <h3 className={styles.contactSubTitle}>Available wherever you are</h3>
      <div className={styles.contact}></div>
      <p className={styles.contactText}>
        Whether you prefer chatting on mobile, desktop, or inside your community
        channels—we’ve got you covered.
      </p>
    </section>
  );
}
