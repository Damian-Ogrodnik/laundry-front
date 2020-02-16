import React from "react";

import { Datepicker } from "../Datepicker";
import { Logout } from "../Logout";

import { getDate } from "../../services/Booking";

export const UserBoard = () => {
  return (
    <div className="userboard__wrapper">
      <Datepicker />
      <button onClick={() => getDate("12-12-2010")}>Get date</button>
      <Logout name={"userboard__logout"} />
    </div>
  );
};
