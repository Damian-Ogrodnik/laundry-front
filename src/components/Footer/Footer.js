import React from "react";
import { IconContext } from "react-icons";

import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="container">
          <IconContext.Provider value={{ className: "container__icon" }}>
            <GoLocation />
          </IconContext.Provider>
          <div className="container__text">
            <p>21 Kamienna Street </p>
            <p>Warsaw, Poland </p>
          </div>
        </div>
        <div className="container">
          <IconContext.Provider value={{ className: "container__icon" }}>
            <MdEmail />
          </IconContext.Provider>
          <div className="container__text">
            <p>laundry_dorn@gmail.com</p>
          </div>
        </div>
        <div className="container">
          <IconContext.Provider value={{ className: "container__icon" }}>
            <MdPhone />
          </IconContext.Provider>
          <div className="container__text">
            <p>+48 888 436 493 </p>
          </div>
        </div>
      </div>
    </div>
  );
};
