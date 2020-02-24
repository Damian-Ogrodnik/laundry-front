import React from "react";

import { Slot } from "../Slot";

import { slots } from "../../utils/slots";

export const Slots = ({ selectedSlot, takenSlots }) => {
  console.log(selectedSlot);
  const renderSlots = () => {
    return slots.map(({ hours, number }) => {
      let taken, selected;
      if (takenSlots)
        taken = takenSlots.some(takenSlot => number === takenSlot.number);
      if (selectedSlot && selectedSlot.number === number) selected = true;
      return (
        <Slot
          key={number}
          hours={hours}
          number={number}
          taken={taken}
          selected={selected}
        />
      );
    });
  };
  return <div className="booking__slots">{renderSlots()}</div>;
};
