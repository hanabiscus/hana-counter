import { counterModeIndicatorProps } from "@/const/types";

const CounterModeIndicator = (props: counterModeIndicatorProps) => {
  return (
    <>
      {props.decrementFlag
        ? DecrementModeIndicator()
        : IncrementModeIndicator()}
    </>
  );
};

const IncrementModeIndicator = () => {
  return (
    <div className="flex justify-center">
      <div className="text-xl w-[100px] p-2 flex justify-center bg-[#009844] rounded-[30px]">
        {"+ +"}
      </div>
    </div>
  );
};

const DecrementModeIndicator = () => {
  return (
    <div className="flex justify-center">
      <div className="text-xl w-[100px] p-2 flex justify-center bg-[#f44336] rounded-[30px]">
        {"- -"}
      </div>
    </div>
  );
};

export default CounterModeIndicator;
