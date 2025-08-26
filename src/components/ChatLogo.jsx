import styles from "./ChatLogo.module.css";
import Logo from "../assets/orcinus.png";

export default function ChatLogo() {
  return (
    <div className={styles.chatLogo}>
      <img src={Logo} alt="Log" />
    </div>
  );
}
