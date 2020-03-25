import React from "react";
import { IconContext } from "react-icons";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";

const footerData = [
  [<GoLocation />, ["21 Kamienna Street", "Warsaw, Poland"]],
  [<MdEmail />, ["laundry_dorn@gmail.com"]],
  [<MdPhone />, ["+48 888 436 493"]]
];

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
              {textArray.map(text => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
