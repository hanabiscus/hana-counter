import { JSX } from "react";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { PLUS, MINUS } from "@/const/constants";

const CounterModeSwitch: (props: SwitchProps) => JSX.Element = (
  props: SwitchProps
) => {
  return (
    <div className="flex justify-center">
      <div className="text-[25px] content-center">{PLUS}</div>
      <div className="content-center">
        <Switch
          checked={props.checked}
          onChange={props.onChange}
          color="error"
        />
      </div>
      <div className="text-[25px] content-center">{MINUS}</div>
    </div>
  );
};

export default CounterModeSwitch;
