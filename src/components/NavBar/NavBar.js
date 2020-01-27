import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo">Logo</div>
      <ul className="navigation__links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/sign-in">
          <li>Sign in</li>
        </Link>
        <Link to="/sign-up">
          <li>Sign up</li>
        </Link>
      </ul>
    </div>
  );
};
