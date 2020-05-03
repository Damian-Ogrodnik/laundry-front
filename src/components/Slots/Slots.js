import React from "react";
import { useSelector } from "react-redux";

import { Slot } from "../Slot";

import { slots } from "../../utils/slots";

export const Slots = () => {
  const { selectedSlot, takenSlots } = useSelector((state) => state.board);
  const loggedUser = useSelector((state) => state.user.id);

  const renderSlots = () => {
    return slots.map(({ number, ...props }) => {
      let taken, selected, user, id;
      if (takenSlots) {
        taken = takenSlots.some((takenSlot) => number === takenSlot.number);
      }
      if (taken) {
        takenSlots.forEach((takenSlot) => {
          if (takenSlot.number === number && takenSlot.user === loggedUser) {
            user = true;
            id = takenSlot._id;
          }
        });
      }
      if (selectedSlot && selectedSlot.number === number) selected = true;
      return (
        <Slot
          key={number}
          propSlot={{ id, number, selected, taken, user, ...props }}
        />
      );
    });
  };
  return <div className="booking__slots">{renderSlots()}</div>;
};
