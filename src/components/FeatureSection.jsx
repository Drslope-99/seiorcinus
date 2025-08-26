import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import styles from "./FeatureSection.module.css";
import FeatureCard from "./FeatureCard";
import Button from "./Button";

export default function FeatureSection() {
  return (
    <section className={`container ${styles.feature}`}>
      <SectionTitle title="Key Features" />
      <SectionSubTitle title="Built for Seamless Blockchain Interaction" />

      <div className={styles.featureContainer}>
        <FeatureCard
          title="Real-Time Data Fetching"
          description="Get wallet balances, recent transactions, token stats, and network updates."
        />
        <FeatureCard
          title="Quick Commands & Natural Queries"
          description="Type /balance or just ask, “What’s my Sei balance?"
        />
        <FeatureCard
          title="Human-Readable Insights"
          description="Get clean, easy-to-understand summaries of complex blockchain data."
        />
        <FeatureCard
          title="Multi-Platform Support"
          description="Use the chatbot on web, Telegram, and Discord. "
        />
        <FeatureCard
          title="Secure and Reliable Data"
          description="Queries powered by trusted Sei blockchain APIs with zero data compromise."
        />
      </div>
      {/* <Button>
        <p>See it in action</p>
      </Button> */}
    </section>
  );
}
