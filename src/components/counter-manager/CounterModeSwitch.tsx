import Switch, { SwitchProps } from "@mui/material/Switch";

const CounterModeSwitch = (props: SwitchProps) => {
  return (
    <Switch color="error" checked={props.checked} onChange={props.onChange} />
  );
};

export default CounterModeSwitch;
