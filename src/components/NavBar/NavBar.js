import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GiClothespin } from "react-icons/gi";

export const NavBar = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <IconContext.Provider value={{ className: "navigation__logo--icon" }}>
          <GiClothespin />
        </IconContext.Provider>
      </div>
      <ul className="navigation__links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/booking">
          <li>Booking</li>
        </Link>
        <Link to="/sign-up">
          <li>Sign up</li>
        </Link>
      </ul>
    </div>
  );
};
