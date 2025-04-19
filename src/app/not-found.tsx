import { JSX } from "react";
import { NOT_FOUND } from "@/const/constants";

const NotFound: () => JSX.Element = () => {
  return (
    <div className="text-5xl h-screen grid justify-center content-center">
      {NOT_FOUND}
    </div>
  );
};

export default NotFound;
