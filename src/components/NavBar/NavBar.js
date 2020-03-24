import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const logged = useSelector(state => state.user.logged);

  const renderNavBar = () => {
    return logged ? (
      <ul className="navigation__links">
        <NavLink activeClassName="selected" to="/user">
          <li>Account</li>
        </NavLink>
        <NavLink activeClassName="selected" to="/booking">
          <li>Book</li>
        </NavLink>
        <NavLink activeClassName="selected" to="/user-bookings">
          <li>My Bookings</li>
        </NavLink>
      </ul>
    ) : (
      <ul className="navigation__links">
        <NavLink activeClassName="selected" to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="selected" to="/sign-in">
          <li>Sign In</li>
        </NavLink>
        <NavLink activeClassName="selected" to="/sign-up">
          <li>Sign Up</li>
        </NavLink>
      </ul>
    );
  };

  return (
    <div className="navigation">
      <div className="navigation__logo"></div>
      {renderNavBar()}
    </div>
  );
};
