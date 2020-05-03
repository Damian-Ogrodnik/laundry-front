import React from "react";
import { IconContext } from "react-icons";

import { footerData } from "./utils";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        {footerData.map(([icon, textArray]) => (
          <div key={textArray[0]} className="container">
            <IconContext.Provider value={{ className: "container__icon" }}>
              {icon}
            </IconContext.Provider>
            <div className="container__text">
              {textArray.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
