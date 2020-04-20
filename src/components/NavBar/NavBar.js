import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const loggedNav = [
  ["Account", "/user"],
  ["Book", "/booking"],
  ["My Bookings", "/user-bookings"]
];
const unloggedNav = [
  ["Home", "/home"],
  ["Sign In", "/sign-in"],
  ["Sign Up", "/sign-up"]
];

const adminNav = [
  ["Bookings", "/admin"],
  ["Search", "/search"]
];

export const NavBar = () => {
  const {isAdmin, logged } = useSelector(state => state.user);

  return (
    <div className="navigation">
      <div className="navigation__logo"></div>
      <ul className="navigation__links">
        {(!logged ? unloggedNav : isAdmin ? adminNav : loggedNav).map(
          ([text, link]) => (
            <NavLink key={text} activeClassName="selected" to={link}>
              <li>{text}</li>
            </NavLink>
          )
        )}
      </ul>
    </div>
  );
};
