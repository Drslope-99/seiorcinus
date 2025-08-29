import styles from "./ChatInputElement.module.css";
import { TiDelete } from "react-icons/ti";

export default function ChatInputElement({ value, onChange, onDelete }) {
  return (
    <div className={styles.searchInputContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="what is the price of sei token"
        value={value}
        onChange={onChange}
      />
      {value && (
        <button type="button" className={styles.deleteBtn} onClick={onDelete}>
          <TiDelete size={24} color="#ff4433" />
        </button>
      )}
    </div>
  );
}
