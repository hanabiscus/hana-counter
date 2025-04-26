"use client";

import { JSX, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { resetCookiesCounterNumber } from "@/server/cookie/cookies";

const ResetCounterNumberButton: () => JSX.Element = () => {
  const [resetFlag, setResetFlag] = useState<boolean>(false);

  const resetAllCounterNumber: () => Promise<void> = async () => {
    setResetFlag(true);
    await resetCookiesCounterNumber();
    window.location.reload();
  };

  return (
    <>
      {resetFlag ? (
        <div className="content-center">
          <CircularProgress color="error" size={30} disableShrink={true} />
        </div>
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
