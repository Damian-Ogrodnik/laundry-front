import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import * as data from "./utils";

export const NavBar = () => {
  const { isAdmin, logged } = useSelector((state) => state.user);

  return (
    <div className="navigation">
      <div className="navigation__logo"></div>
      <ul className="navigation__links">
        {(!logged
          ? data.unloggedNav
          : isAdmin
          ? data.adminNav
          : data.loggedNav
        ).map(([text, link]) => (
          <NavLink key={text} activeClassName="selected" exact to={link}>
            <li>{text}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
