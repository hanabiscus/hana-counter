"use client";

import Link from "next/link";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link title="Logo" href="/">
        <img src="hana.svg" className={styles.hana} />
      </Link>
    </header>
  );
};

export default Header;
