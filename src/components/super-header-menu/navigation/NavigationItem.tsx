import Link from "next/link";
import { navigationItemProps } from "@/const/types";

const NavigationItem = ({ Icon, href, name }: navigationItemProps) => {
  return (
    <>
      <Link href={href}>
        <div className="flex items-center justify-center">
          <Icon />
          <p className={"m-2"}>{name}</p>
        </div>
      </Link>
    </>
  );
};

export default NavigationItem;
