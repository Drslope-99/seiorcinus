import styles from "./FeatureCard.module.css";

export default function FeatureCard({ title, description }) {
  return (
    <article className={styles.featureCard}>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{description}</p>
    </article>
  );
}
