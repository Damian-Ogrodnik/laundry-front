import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdCreate } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { GiClothespin } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

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
            <button className="button__signin">Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className="button__signup">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="homepage__instruction">
        <div className="homepage__instruction--header">
          <h2>How it works?</h2>
        </div>
        <div className="homepage__tiles">
          <div className="homepage__tile">
            <div className="homepage__tile__wrapper--top">
              <IconContext.Provider
                value={{ className: "homepage__tile__icon" }}
              >
                <MdCreate />
              </IconContext.Provider>
            </div>
            <div className="homepage__tile__wrapper">
              <h3>Create Account</h3>
            </div>
          </div>

          <IconContext.Provider value={{ className: "homepage__tile__arrow" }}>
            <FaArrowRight />
          </IconContext.Provider>
          <div className="homepage__tile">
            <div className="homepage__tile__wrapper--top">
              <IconContext.Provider
                value={{ className: "homepage__tile__icon" }}
              >
                <FiLogIn />
              </IconContext.Provider>
            </div>
            <div className="homepage__tile__wrapper">
              <h3>Sign In</h3>
            </div>
          </div>
          <IconContext.Provider value={{ className: "homepage__tile__arrow" }}>
            <FaArrowRight />
          </IconContext.Provider>
          <div className="homepage__tile">
            <div className="homepage__tile__wrapper--top">
              <IconContext.Provider
                value={{ className: "homepage__tile__icon" }}
              >
                <GoCalendar />
              </IconContext.Provider>
            </div>
            <div className="homepage__tile__wrapper">
              <h3>Choose Date</h3>
            </div>
          </div>
          <IconContext.Provider value={{ className: "homepage__tile__arrow" }}>
            <FaArrowRight />
          </IconContext.Provider>
          <div className="homepage__tile">
            <div className="homepage__tile__wrapper--top">
              <IconContext.Provider
                value={{ className: "homepage__tile__icon" }}
              >
                <FaCheckCircle />
              </IconContext.Provider>
            </div>
            <div className="homepage__tile__wrapper">
              <h3>Boook</h3>
            </div>
          </div>
          <IconContext.Provider value={{ className: "homepage__tile__arrow" }}>
            <FaArrowRight />
          </IconContext.Provider>

          <div className="homepage__tile">
            <div className="homepage__tile__wrapper--top">
              <IconContext.Provider
                value={{ className: "homepage__tile__icon" }}
              >
                <GiClothespin />
              </IconContext.Provider>
            </div>
            <div className="homepage__tile__wrapper">
              <h3>Do Laundry!</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__footer"></div>
    </div>
  );
};
