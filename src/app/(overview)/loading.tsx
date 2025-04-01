import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="h-screen grid justify-center content-center">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loading;
