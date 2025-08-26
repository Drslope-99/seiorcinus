import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../assets/Logo.png";
import Button from "./Button";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { IoSparklesOutline } from "react-icons/io5";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className={`${styles.nav} container`}>
      <a href="/" className={styles.navLogo}>
        <img src={logo} alt="nav logo" className={styles.logo} />
      </a>
      <div className={styles.navButtons}>
        <Button
          className={`${styles.navBtn} ${styles.btnLeft}`}
          onClick={() => navigate("/prompt")}
        >
          <HiOutlineCircleStack />
          <p>Prompt Me</p>
        </Button>

        <Button className={`${styles.navBtn} ${styles.btnRight}`}>
          <IoSparklesOutline />
          <p>Free Credits</p>
        </Button>
      </div>
    </nav>
  );
}
