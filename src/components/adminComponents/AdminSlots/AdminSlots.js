import React from "react";
import { useSelector } from "react-redux";

import { slots } from "../../../utils/slots";

import { AdminSlot } from "../AdminSlot";

export const AdminSlots = () => {
  const takenSlots = useSelector(state => state.board.takenSlots);

  const renderSlots = () => {
    return slots.map(({ hours, number, lastBooking }) => {
      let taken, id;
      if (takenSlots) {
        taken = takenSlots.some(takenSlot => number === takenSlot.number);
      }
      if (taken) {
        takenSlots.forEach(takenSlot => {
          if (takenSlot.number === number) id = takenSlot._id;
        });
      }

      return (
        <AdminSlot
          key={number}
          hours={hours}
          number={number}
          taken={taken}
          lastBooking={lastBooking}
          id={id}
        />
      );
    });
  };
  return <div className="booking__slots">{renderSlots()}</div>;
};
