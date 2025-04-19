import { JSX } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = (): JSX.Element => {
  return (
    <div className="h-svh grid justify-center content-center">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loading;
