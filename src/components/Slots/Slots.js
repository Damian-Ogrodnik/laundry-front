import React from "react";

import { Slot } from "../Slot";

import { slots } from "../../utils/slots";

export const Slots = ({ selectedSlot, takenSlots }) => {
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
  return <div className="booking__slots">{renderSlots()}</div>;
};
