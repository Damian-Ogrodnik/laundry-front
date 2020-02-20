import React from "react";

import { Slots } from "../Slots";

export const Booking = () => {
  return (
    <div className="booking">
      <Slots />
      <button className="booking__button">Book</button>
    </div>
  );
};
