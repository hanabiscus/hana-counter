"use client";

import NavigationItem from "./navigation-item/NavigationItem";
import { useSuperHeaderMenu } from "@/hooks/useSuperHeaderMenu";
import DatasetRoundedIcon from "@mui/icons-material/DatasetRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import AuthButton from "./auth-button/AuthButton";
import {
  BALANCE_PAGE_PATH,
  HOME_PAGE_PATH,
  SHM_NAVIGATION_NAME_COUNTER,
  SHM_NAVIGATION_NAME_MONTHLY_BALANCE,
} from "@/const/constants";

const SuperHeaderMenu = () => {
  const isSuperHeaderMenuOpen = useSuperHeaderMenu()[0];
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
              name={SHM_NAVIGATION_NAME_MONTHLY_BALANCE}
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
