import { JSX } from "react";
import Image from "next/image";
import { hanaKindButtonProps } from "@/const/types";
import { useHanaKind } from "@/hooks/useHanaKind";
import { HANA_SIZE } from "@/const/constants";

const HanaKindButton: (props: hanaKindButtonProps) => JSX.Element = (
  props: hanaKindButtonProps
) => {
  const [selectedHanaKind, { setHanaKind }] = useHanaKind();

  return (
    <>
      {selectedHanaKind === props.hanaKind ? (
        <div>
          <button
            onClick={() => setHanaKind(props.hanaKind)}
            className="h-[50px] w-[70px] bg-[#444444] rounded-xl"
          >
            <span className="flex justify-center items-center">
              <Image
                src={props.svgPath}
                width={HANA_SIZE}
                height={HANA_SIZE}
                alt={props.hanaKind}
              />
            </span>
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setHanaKind(props.hanaKind)}
            className="h-[50px] w-[70px] rounded-xl"
          >
            <span className="flex justify-center items-center">
              <Image
                src={props.svgPath}
                width={HANA_SIZE}
                height={HANA_SIZE}
                alt={props.hanaKind}
              />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default HanaKindButton;
