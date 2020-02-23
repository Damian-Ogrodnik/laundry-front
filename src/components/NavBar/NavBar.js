import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GiClothespin } from "react-icons/gi";

export const NavBar = () => {
  const logged = useSelector(state => state.user.logged);

  const renderNavBar = () => {
    return logged ? (
      <ul className="navigation__links">
        <Link to="/user">
          <li>Account</li>
        </Link>
        <Link to="/booking">
          <li>Book</li>
        </Link>
        <Link to="/user-bookings">
          <li>My bookings</li>
        </Link>
      </ul>
    ) : (
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
    );
  };

  return (
    <div className="navigation">
      <div className="navigation__logo">
        <IconContext.Provider value={{ className: "navigation__logo--icon" }}>
          <GiClothespin />
        </IconContext.Provider>
      </div>
      {renderNavBar()}
    </div>
  );
};
