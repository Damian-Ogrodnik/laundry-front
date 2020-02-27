import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage__front">
        <div className="homepage__welcome">
          <h2>Welcome at</h2>
          <h1 className="homepage__header">Student Dorm Laundry</h1>
        </div>
        <div className="homepage__buttons">
          <Link to="/sign-in">
            <button className="button__signin">Sign in</button>
          </Link>
          <Link to="/sign-up">
            <button className="button__signup">Sign up</button>
          </Link>
        </div>
      </div>
      <div className="homepage__instruction"></div>
      <div className="homepage__footer"></div>
    </div>
  );
};
