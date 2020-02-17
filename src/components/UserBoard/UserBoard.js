import React from "react";

import { Datepicker } from "../Datepicker";
import { Logout } from "../Logout";
import { Booking } from "../Booking";

export const UserBoard = () => {
  return (
    <div className="userboard__wrapper">
      <Datepicker />
      <Booking />
      <Logout name={"userboard__logout"} />
    </div>
  );
};
