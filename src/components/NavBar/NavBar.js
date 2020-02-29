import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const logged = useSelector(state => state.login.logged);

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
          <li>My bookings</li>
        </NavLink>
      </ul>
    ) : (
      <ul className="navigation__links">
        <NavLink activeClassName="selected" to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="selected" to="/sign-in">
          <li>Sign in</li>
        </NavLink>
        <NavLink activeClassName="selected" to="/sign-up">
          <li>Sign up</li>
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
