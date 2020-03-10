import React from "react";

export const Error = ({ errorMsg, name }) => {
  return <div className={`${name} error`}>{errorMsg}</div>;
};
