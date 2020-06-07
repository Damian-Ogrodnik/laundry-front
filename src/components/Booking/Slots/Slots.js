import React from "react";
import { useSelector } from "react-redux";

import { Slot } from "../Slot";

import { slots } from "utils/slots";

export const Slots = () => {
  const { selectedSlot, takenSlots } = useSelector((state) => state.board);
  const loggedUser = useSelector((state) => state.user.id);

  const renderSlots = () =>
    slots.map(({ number, ...props }) => {
      const takenSlot = takenSlots.filter((slot) => number === slot.number);
      if (takenSlot.length) {
        const id = takenSlot[0].user === loggedUser ? takenSlot[0]._id : null;
        return <Slot key={number} taken props={{ id, number, ...props }} />;
      }

      return selectedSlot.number === number ? (
        <Slot key={number} selected props={{ number, ...props }} />
      ) : (
        <Slot key={number} props={{ number, ...props }} />
      );
    });

  return <div className="booking__slots">{renderSlots()}</div>;
};
