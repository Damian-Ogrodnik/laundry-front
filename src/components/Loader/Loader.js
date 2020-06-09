import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

export const Loader = () => (
  <div className="loader">
    <FadeLoader size={55} color={"#b82601"} loading={true} />
  </div>
);
