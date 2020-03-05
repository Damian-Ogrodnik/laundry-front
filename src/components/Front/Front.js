import React from "react";
import { Link } from "react-router-dom";

export const Front = () => {
  return (
    <div className="homepage__front">
      <div className="homepage__welcome">
        <h2>Welcome at</h2>
        <h1 className="homepage__header">
          Student <span>Dorm</span> Laundry
        </h1>
      </div>
      <div className="homepage__buttons">
        <Link to="/sign-in">
          <button className="button__signin">SIGN IN</button>
        </Link>
        <Link to="/sign-up">
          <button className="button__signup">SIGN UP</button>
        </Link>
      </div>
    </div>
  );
};
