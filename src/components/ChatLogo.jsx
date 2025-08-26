import styles from "./ChatLogo.module.css";
import Logo from "../assets/orcinus.png";
import { Link } from "react-router-dom";

export default function ChatLogo() {
  return (
    <Link to="/" className={styles.chatLogo}>
      <img src={Logo} alt="Log" />
    </Link>
  );
}
