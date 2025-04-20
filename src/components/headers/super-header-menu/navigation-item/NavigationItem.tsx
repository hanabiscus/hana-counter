import { JSX } from "react";
import Link from "next/link";
import { navigationItemProps } from "@/const/types";

const NavigationItem: (props: navigationItemProps) => JSX.Element = (
  props: navigationItemProps
) => {
  return (
    <>
      <Link href={props.href}>
        <div className="flex items-center justify-center">
          <props.Icon />
          <p className={"m-2"}>{props.name}</p>
        </div>
      </Link>
    </>
  );
};

export default NavigationItem;
