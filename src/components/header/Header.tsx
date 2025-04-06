"use client";

import Link from "next/link";
import Image from "next/image";
import { useSuperHeaderMenu } from "@/hooks/useSuperHeaderMenu";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import {
  HANA_IMAGE_PATH,
  HEADER_ICON_SIZE,
  HOME_PAGE_PATH,
} from "@/const/constants";

const Header = () => {
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
        <Link title="logo" href={HOME_PAGE_PATH}>
          <div className="flex justify-center">
            <Image
              src={HANA_IMAGE_PATH}
              alt={"headerIcon"}
              width={HEADER_ICON_SIZE}
              height={HEADER_ICON_SIZE}
              priority={true}
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
