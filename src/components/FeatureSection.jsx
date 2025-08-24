import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import styles from "./FeatureSection.module.css";

export default function FeatureSection() {
  return (
    <section className={`container ${styles.feature}`}>
      <SectionTitle title="How it works" />
      <SectionSubTitle title="How it works in three steps" />
    </section>
  );
}
