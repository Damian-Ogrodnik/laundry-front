import React from "react";
import { useSelector } from "react-redux";

import { Slot } from "../Slot";

import { slots } from "../../utils/slots";

export const Slots = ({ selectedSlot, takenSlots }) => {
  const loggedUser = useSelector(state => state.login.user.data.id);
  const renderSlots = () => {
    return slots.map(({ hours, number }) => {
      let taken, selected, user;
      if (takenSlots) {
        taken = takenSlots.some(takenSlot => number === takenSlot.number);
      }
      if (taken) {
        takenSlots.forEach(takenSlot => {
          if (takenSlot.number === number && takenSlot.user === loggedUser)
            user = true;
        });
      }

      if (selectedSlot && selectedSlot.number === number) selected = true;
      return (
        <Slot
          key={number}
          hours={hours}
          number={number}
          taken={taken}
          selected={selected}
          user={user}
        />
      );
    });
  };
  return <div className="booking__slots">{renderSlots()}</div>;
};
