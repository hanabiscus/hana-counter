import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="h-svh grid justify-center content-center">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loading;
