import React from "react";

import { Datepicker } from "../Datepicker";
import { Logout } from "../Logout";

export const UserBoard = () => {
  return (
    <div className="userboard__wrapper">
      <Datepicker />
      <Logout name={"userboard__logout"} />
    </div>
  );
};
