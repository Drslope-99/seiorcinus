import styles from "./ChatSideBar.module.css";
import ChatLogo from "./ChatLogo";
import { BsPencilSquare } from "react-icons/bs";

export default function ChatSideBar({ isOpen }) {
  return (
    <div className={`${styles.chatSidebar} ${isOpen ? styles.active : ""}`}>
      <ChatLogo />
      <button className={styles.chatSidebarBtn}>
        <BsPencilSquare size={23} color="white" />
        new chat
      </button>
    </div>
  );
}
