import React from "react";
import { useSelector } from "react-redux";

import { slots } from "utils/slots";

import { Slot } from "./Slot";
import { Toast } from "components/Toast";

export const AdminSlots = () => {
  const error = useSelector((state) => state.admin.error);
  const takenSlots = useSelector((state) => state.board.takenSlots);

  const renderSlots = () =>
    slots.map(({ number, ...props }) => {
      let taken = takenSlots.filter((takenSlot) => number === takenSlot.number);
      return taken.length ? (
        <Slot
          key={number}
          props={{ number, slotId: taken[0]._id, taken, ...props }}
        />
      ) : (
        <Slot key={number} props={{ number, ...props }} />
      );
    });

  return (
    <div className="booking__slots">
      {renderSlots()}
      <Toast text={"Slot booked"} toastType="BOOK" />
      <Toast text={"Slot deleted"} toastType="DELETE" />
      <Toast text={error} toastType={"ERROR"} />
    </div>
  );
};
