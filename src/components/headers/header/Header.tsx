"use client";

import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSuperHeaderMenu } from "@/hooks/useSuperHeaderMenu";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import {
  HANA_SIZE,
  HANA_SVG_PATH,
  HANA_TITLE,
  HOME_PAGE_PATH,
} from "@/const/constants";

const Header: () => JSX.Element = () => {
  const [isSuperHeaderMenuOpen, { superHeaderMenuMutator }] =
    useSuperHeaderMenu();

  return (
    <header className="bg-[#009844] p-2.5">
      <div className="grid grid-cols-3 content-start">
        <button className="w-10" onClick={superHeaderMenuMutator}>
          {isSuperHeaderMenuOpen ? (
            <KeyboardArrowUpRoundedIcon fontSize="large" />
          ) : (
            <KeyboardArrowDownRoundedIcon fontSize="large" />
          )}
        </button>
        <Link title={HANA_TITLE} href={HOME_PAGE_PATH}>
          <div className="flex justify-center">
            <Image
              src={HANA_SVG_PATH}
              width={HANA_SIZE}
              height={HANA_SIZE}
              priority={true}
              alt={HANA_TITLE}
            ></Image>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
