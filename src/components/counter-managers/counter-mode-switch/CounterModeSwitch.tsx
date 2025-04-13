import Switch, { SwitchProps } from "@mui/material/Switch";

const CounterModeSwitch = (props: SwitchProps) => {
  return (
    <div className="flex justify-center">
      <div className="text-[25px] content-center">{"+"}</div>
      <div className="content-center">
        <Switch
          checked={props.checked}
          onChange={props.onChange}
          color="error"
        />
      </div>
      <div className="text-[25px] content-center">{"-"}</div>
    </div>
  );
};

export default CounterModeSwitch;
