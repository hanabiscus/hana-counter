import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="h-screen grid justify-center content-center">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loading;
