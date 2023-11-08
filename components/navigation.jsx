"use client";

import { useState } from "react";
import styles from "./navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import logoNav from "../public/img/logo/allien.png";
import { animateScroll as scroll } from "react-scroll";

export default function Navigation() {
  const [scrollTop, setScrollTop] = useState();

  const scrollTopY = () => {
    scroll.scrollToTop();
  };
  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <div className={styles.logo_nav}>
          <Link href="/" onClick={() => setScrollTop(scrollTopY)}>
            <Image src={logoNav} width={25} alt="Logo" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/" onClick={() => setScrollTop(scrollTopY)}>
                Home
              </Link>
            </li>
            
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
