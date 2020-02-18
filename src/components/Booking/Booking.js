import React from "react";
import { useSelector } from "react-redux";

import { Slot } from "../Slot";

import { slots } from "../../utils/slots";

export const Booking = () => {
  const takenSlots = useSelector(state => state.board.bookings);

  const renderSlots = () => {
    return slots.map(({ hours, number }) => {
      let taken = false;
      if (takenSlots)
        taken = takenSlots.some(takenSlot => number === takenSlot.number);
      return <Slot hours={hours} number={number} taken={taken} />;
    });
  };

  return <div className="booking">{renderSlots()}</div>;
};
