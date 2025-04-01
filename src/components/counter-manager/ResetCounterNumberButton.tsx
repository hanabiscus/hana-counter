"use client";

import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
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
          <button onClick={resetAllCounterNumber}>
            <DeleteForeverIcon color="error" />
          </button>
        </div>
      )}
    </>
  );
};

export default ResetCounterNumberButton;
