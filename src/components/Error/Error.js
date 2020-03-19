import React from "react";
import { IconContext } from "react-icons";
import { MdError } from "react-icons/md";

export const Error = ({ errorMsg, name, icon }) => {
  return (
    <div className={`${name} error`}>
      {icon && (
        <IconContext.Provider value={{ className: `${name} error__icon` }}>
          <MdError />
        </IconContext.Provider>
      )}
      <p>{errorMsg}</p>
    </div>
  );
};
