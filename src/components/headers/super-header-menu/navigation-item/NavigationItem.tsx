import { JSX } from "react";
import Link from "next/link";
import { useSuperHeaderMenu } from "@/hooks/useSuperHeaderMenu";
import { navigationItemProps } from "@/const/types";

const NavigationItem: (props: navigationItemProps) => JSX.Element = (
  props: navigationItemProps
) => {
  const superHeaderMenuMutator: () => void =
    useSuperHeaderMenu()[1].superHeaderMenuMutator;

  return (
    <button
      onClick={superHeaderMenuMutator}
      className="underline underline-offset-4"
    >
      <Link href={props.href}>
        <div className="flex items-center justify-center">
          <props.Icon />
          <p className={"m-2"}>{props.name}</p>
        </div>
      </Link>
    </button>
  );
};

export default NavigationItem;
