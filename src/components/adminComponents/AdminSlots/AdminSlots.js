import React from "react";
import { useSelector } from "react-redux";

import { slots } from "../../../utils/slots";

import { AdminSlot } from "../AdminSlot";
import { Toast } from "../../Toast";

export const AdminSlots = () => {
  const error = useSelector((state) => state.admin.error);
  const takenSlots = useSelector((state) => state.board.takenSlots);

  const renderSlots = () => {
    return slots.map(({ number, ...props }) => {
      let taken, slotId;
      if (takenSlots) {
        taken = takenSlots.some((takenSlot) => number === takenSlot.number);
      }
      if (taken) {
        takenSlots.forEach((takenSlot) => {
          if (takenSlot.number === number) slotId = takenSlot._id;
        });
      }
      return (
        <AdminSlot key={number} props={{ number, slotId, taken, ...props }} />
      );
    });
  };
  return (
    <div className="booking__slots">
      {renderSlots()}
      <Toast text={"Slot booked"} toastType="BOOK" />
      <Toast text={"Slot deleted"} toastType="DELETE" />
      <Toast text={error} toastType={"ERROR"} />
    </div>
  );
};
