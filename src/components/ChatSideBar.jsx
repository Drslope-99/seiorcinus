import styles from "./ChatSideBar.module.css";
import ChatLogo from "./ChatLogo";
import { BsPencilSquare } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";

export default function ChatSideBar({ isOpen, onClose }) {
  return (
    <div className={`${styles.chatSidebar} ${isOpen ? styles.active : ""}`}>
      <button className={styles.closeBtn} onClick={onClose}>
        <RiCloseLargeLine size={24} color="white" />
      </button>
      <ChatLogo />
      <button className={styles.chatSidebarBtn}>
        <BsPencilSquare size={23} color="white" />
        new chat
      </button>
    </div>
  );
}
