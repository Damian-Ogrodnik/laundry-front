import React from "react";
import { IconContext } from "react-icons";

import { FaArrowRight } from "react-icons/fa";

export const Tile = ({ icon, text, arrow = true, animate }) => {
  return (
    <>
      <div className={`homepage__tile ${animate}`}>
        <div className="homepage__tile__wrapper--top">
          <IconContext.Provider value={{ className: "homepage__tile__icon" }}>
            {icon}
          </IconContext.Provider>
        </div>
        <div className="homepage__tile__wrapper">
          <h3>{text}</h3>
        </div>
      </div>
      {arrow && (
        <IconContext.Provider
          value={{ className: `homepage__tile__arrow ${animate}` }}
        >
          <FaArrowRight />
        </IconContext.Provider>
      )}
    </>
  );
};
