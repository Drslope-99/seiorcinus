import { useState, useEffect } from "react";
import React from "react";

import styles from "./ChatContent.module.css";
import { RiMenu2Line } from "react-icons/ri";
import { HiOutlineCircleStack } from "react-icons/hi2";
import ChatInputElement from "./ChatInputElement";

export default function ChatContent({ isOpne, onOpenNav }) {
  const [chats, setChats] = useState([]);
  const [prompt, setPrompt] = useState("");

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!prompt) {
      return;
    } else {
      console.log(prompt);
      setChats((prev) => [...prev, prompt]);
      setPrompt("");
    }
  };

  useEffect(() => {
    console.log(chats);
  }, [chats]);

  return (
    <div className={styles.chatContent}>
      <header className={styles.chatHeader}>
        {!isOpne && (
          <button className={styles.navToggle} onClick={onOpenNav}>
            <RiMenu2Line size={24} color="white" />
          </button>
        )}

        <button className={styles.btnCredits}>
          <HiOutlineCircleStack />
          <p>120 Credits</p>
        </button>
      </header>
      <section className={styles.chatInterface}>
        <div className={styles.chatBox}>
          {chats.map((chat) => (
            <ChatMessage key={chat} message={chat} />
          ))}
        </div>
        <form onSubmit={handleChatSubmit} className={styles.chatForm}>
          <ChatInputElement
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </form>
      </section>
    </div>
  );
}

function ChatMessage({ message }) {
  return <article className={styles.chatMessage}>{message}</article>;
}
