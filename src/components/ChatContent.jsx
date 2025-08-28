import { useState, useEffect } from "react";
import React from "react";

import styles from "./ChatContent.module.css";
import { RiMenu2Line } from "react-icons/ri";
import { HiOutlineCircleStack } from "react-icons/hi2";
import ChatInputElement from "./ChatInputElement";

const url =
  "https://orcinus-drslope-999920-k9hatlqz.leapcell.dev/sei_orcinus_agent";

export default function ChatContent({ isOpne, onOpenNav }) {
  const [chats, setChats] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) {
      return;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
          name: "@drslopes",
          media: "telegram",
        }),
      });

      if (!response.ok) {
        throw new Error(`Something went wrong, try sending again`);
      }
      const data = await response.json();
      setChats((prev) => [...prev, { prompt, ...data }]);
      console.log({ prompt, ...data });
      setPrompt("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  console.log(chats);

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
          <ChatMessage />
          <ChatMessage />
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

function ChatMessage() {
  return (
    <article className={styles.chatMessage}>
      <p className={styles.chatInputMessage}>what is seiorcinus</p>
      <p className={styles.chatOutputMessage}>
        here is the chat answer Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatibus deleniti eos numquam animi non eaque
        atque porro aspernatur illo, ipsum debitis quaerat iure nulla quasi!
        Perferendis eius cumque nostrum magni quas omnis eligendi vitae eos
        rerum explicabo recusandae, repellendus excepturi minus expedita nisi
        libero sed incidunt possimus enim sunt laudantium.
      </p>
    </article>
  );
}
