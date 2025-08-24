import SectionTitle from "./SectionTitle";
import SectionSubTitle from "./SectionSubTitle";
import InfoCards from "./InfoCards";
import styles from "./InfoSection.module.css";
import { VscGraph } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";

export default function InfoSection() {
  return (
    <section className={`container ${styles.infoSection}`}>
      <SectionTitle title="How it works" />
      <SectionSubTitle title="How it works in three steps" />
      <div className={styles.infoCards}>
        <InfoCards
          title="Ask a Question"
          description="Type natural queries like 'Show my Sei wallet balance' "
        >
          <div className={styles.btnContainer}>
            <button className={styles.btn}>
              What is the price of sei token
            </button>
          </div>
        </InfoCards>
        <InfoCards
          title="Get Real-Time Data"
          description="Our chatbot fetches verified data directly from the Sei blockchain within seconds."
        >
          <VscGraph size={100} fill="#fff6e4" />
        </InfoCards>
        <InfoCards
          title="Take Action"
          description="Explore, analyze, or share insights instantly—all within a conversational interface."
        >
          <FaPlay size={100} fill="#fff6e4" />
        </InfoCards>
      </div>
    </section>
  );
}
