"use client";

import NavigationItem from "./navigation/NavigationItem";
import { useIsSuperHeaderMenuOpenState } from "@/hooks/useSuperHeaderMenu";
import DatasetRoundedIcon from "@mui/icons-material/DatasetRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import AuthButton from "./auth-button/AuthButton";
import { BALANCE_PAGE_PATH, HOME_PAGE_PATH } from "@/const/constants";

const SuperHeaderMenu = () => {
  const IsSuperHeaderMenuOpen = useIsSuperHeaderMenuOpenState();
  return (
    <>
      {IsSuperHeaderMenuOpen ? (
        <div className="bg-[#333333]">
          <div className="grid grid-cols-2 place-items-center">
            <NavigationItem
              Icon={DatasetRoundedIcon}
              href={HOME_PAGE_PATH}
              name={"カウンタ"}
            />
            <NavigationItem
              Icon={PaidRoundedIcon}
              href={BALANCE_PAGE_PATH}
              name={"収支"}
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
