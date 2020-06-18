import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import * as data from "./utils";
import { Burger } from "./Burger";

export const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(false);
  const { isAdmin, logged } = useSelector((state) => state.user);

  useEffect(() => {
    return window.innerWidth < 600 ? setMobile(true) : null;
  }, []);

  return (
    <div className="navigation">
      {mobile && <Burger active={active} setActive={setActive} />}
      <ul
        className={`navigation__links ${mobile ? "mobile" : ""} ${
          active ? "active" : ""
        } 
        `}
      >
        {(!logged
          ? data.unloggedNav
          : isAdmin
          ? data.adminNav
          : data.loggedNav
        ).map(([text, link]) => (
          <NavLink
            onClick={() => setActive(false)}
            key={text}
            activeClassName="selected"
            exact
            to={link}
          >
            <li>{text}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
