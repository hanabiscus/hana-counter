import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";
import { HEADER_ICON_SIZE } from "@/const/constants";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link title="Logo" href="/">
        <div className={styles.hana}>
          <Image
            src="hana.svg"
            alt={"headerIcon"}
            width={HEADER_ICON_SIZE}
            height={HEADER_ICON_SIZE}
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
