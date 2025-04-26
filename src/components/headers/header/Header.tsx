"use client";

import { JSX } from "react";
import Link from "next/link";
import { useSuperHeaderMenu } from "@/hooks/useSuperHeaderMenu";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { HOME_PAGE_PATH } from "@/const/constants";

const Header: () => JSX.Element = () => {
  const [isSuperHeaderMenuOpen, { superHeaderMenuMutator }] =
    useSuperHeaderMenu();

  return (
    <header className="bg-[#009844] p-2">
      <div className="grid grid-cols-3 content-start">
        <button className="w-10" onClick={superHeaderMenuMutator}>
          {isSuperHeaderMenuOpen ? (
            <KeyboardArrowUpRoundedIcon fontSize="large" />
          ) : (
            <KeyboardArrowDownRoundedIcon fontSize="large" />
          )}
        </button>
        <Link title="&#x1f33a;&#xfe0f;" href={HOME_PAGE_PATH}>
          <div className="flex justify-center">
            <div className="text-[35px]">&#x1f33a;&#xfe0f;</div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
