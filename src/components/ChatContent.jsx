import { useState, useEffect } from "react";
import React from "react";

import styles from "./ChatContent.module.css";
import { RiMenu2Line } from "react-icons/ri";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { CiFaceFrown } from "react-icons/ci";
import ChatInputElement from "./ChatInputElement";
import Loader from "./Loader";

const url =
  "https://orcinus-drslope-999920-k9hatlqz.leapcell.dev/sei_orcinus_agent";

export default function ChatContent({ isOpne, onOpenNav }) {
  const [chats, setChats] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
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
    } finally {
      setIsLoading(false);
    }
  };

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
            <ChatMessage message={chat} key={chat.prompt} />
          ))}
          {isLoading && <Loader />}
          {errorMessage && <ErrorMessage message={errorMessage} />}
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
  return (
    <article className={styles.chatMessage}>
      <p className={styles.chatInputMessage}>{message.prompt}</p>
      <p className={styles.chatOutputMessage}>{message.output}</p>
    </article>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className={styles.chatErrorMessage}>
      <CiFaceFrown size={24} color="#fff6e4" />
      Oops!,
      {message}
    </p>
  );
}
