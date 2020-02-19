import React from "react";
import { useSelector } from "react-redux";

import { Slot } from "../Slot";

import { slots } from "../../utils/slots";

export const Booking = () => {
  const takenSlots = useSelector(state => state.board.bookings);
  const selectedSlot = useSelector(state => state.board.selectedSlot);

  const renderSlots = () => {
    return slots.map(({ hours, number }) => {
      let taken, selected;
      if (takenSlots)
        taken = takenSlots.some(takenSlot => number === takenSlot.number);
      if (selectedSlot === number) selected = true;
      return (
        <Slot hours={hours} number={number} taken={taken} selected={selected} />
      );
    });
  };

  return <div className="booking">{renderSlots()}</div>;
};
