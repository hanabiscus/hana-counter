"use client";

import { JSX } from "react";
import { INTERNAL_SERVER_ERROR } from "@/const/constants";

const ErrorPage: () => JSX.Element = () => {
  return (
    <div className="text-5xl h-screen grid justify-center content-center">
      {INTERNAL_SERVER_ERROR}
    </div>
  );
};

export default ErrorPage;
