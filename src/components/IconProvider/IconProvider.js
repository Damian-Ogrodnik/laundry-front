import React from "react";
import { IconContext } from "react-icons";

export const IconProvider = ({ icon, name }) => {
  return (
    <IconContext.Provider value={{ className: name }}>
      {icon}
    </IconContext.Provider>
  );
};
