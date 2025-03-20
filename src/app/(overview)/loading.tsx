"use client";

import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="loading">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loading;
