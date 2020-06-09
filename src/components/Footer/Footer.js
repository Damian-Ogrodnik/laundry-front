import React from "react";

import { footerData } from "./utils";

import { IconProvider } from "components/IconProvider";

export const Footer = () => (
  <div className="footer">
    <div className="footer__wrapper">
      {footerData.map(([icon, textArray]) => (
        <div key={textArray[0]} className="container">
          <IconProvider name={"container__icon"} icon={icon} />
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
