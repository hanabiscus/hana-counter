"use client";

import { useState } from "react";
import { CircularProgress, Box } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { resetCookiesCounterNumber } from "@/server/cookie/coookies";

const ResetCounterNumberButton = () => {
  const [resetFlag, setResetFlag] = useState(false);

  const resetAllCounterNumber = async () => {
    setResetFlag(true);
    await resetCookiesCounterNumber();
    window.location.reload();
  };

  return (
    <>
      {resetFlag ? (
        <CircularProgress color="error" size={30} />
      ) : (
        <div className="content-center">
          <Box onClick={resetAllCounterNumber}>
            <DeleteForeverIcon color="error" />
          </Box>
        </div>
      )}
    </>
  );
};

export default ResetCounterNumberButton;
