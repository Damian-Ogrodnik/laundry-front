import React from "react";

import { Slot } from "../Slot";

import { slots } from "../../utils/slots";

export const Booking = () => {
  return (
    <div>
      {slots.map(({ hours, number }) => (
        <Slot hours={hours} number={number} />
      ))}
    </div>
  );
};
