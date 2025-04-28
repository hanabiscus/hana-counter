"use client";

import { JSX } from "react";
import NavigationItem from "./navigation-item/NavigationItem";
import { useSuperHeaderMenu } from "@/hooks/useSuperHeaderMenu";
import DatasetRoundedIcon from "@mui/icons-material/DatasetRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import AuthButton from "./auth-button/AuthButton";
import {
  BALANCE_PAGE_PATH,
  HOME_PAGE_PATH,
  PROBABILITY_PAGE_PATH,
  SHM_NAVIGATION_NAME_COUNTER,
  SHM_NAVIGATION_NAME_BALANCE,
  SHM_NAVIGATION_NAME_SETTEI_HAMBETSU,
} from "@/const/constants";

const SuperHeaderMenu: () => JSX.Element = () => {
  const isSuperHeaderMenuOpen: boolean = useSuperHeaderMenu()[0];

  return (
    <>
      {isSuperHeaderMenuOpen ? (
        <div className="bg-[#333333]">
          <div className="grid grid-cols-2 place-items-center">
            <NavigationItem
              Icon={DatasetRoundedIcon}
              href={HOME_PAGE_PATH}
              name={SHM_NAVIGATION_NAME_COUNTER}
            />
            <NavigationItem
              Icon={PaidRoundedIcon}
              href={BALANCE_PAGE_PATH}
              name={SHM_NAVIGATION_NAME_BALANCE}
            />
          </div>
          <div className="grid grid-cols-2 place-items-center">
            <NavigationItem
              Icon={VisibilityRoundedIcon}
              href={PROBABILITY_PAGE_PATH}
              name={SHM_NAVIGATION_NAME_SETTEI_HAMBETSU}
            />
          </div>
          <div className="p-1">
            <AuthButton />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SuperHeaderMenu;
