import { JSX } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading: () => JSX.Element = () => {
  return (
    <div className="h-svh grid justify-center content-center">
      <CircularProgress color="secondary" disableShrink={true} />
    </div>
  );
};

export default Loading;
