import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { withConfirm } from "HOC/withConfirm";

import { deleteUsersBooking } from "redux/userBookings/userBookingsUtils";

const UserSlot = ({ confirm, data: { date, hours, _id }, number, setOpen }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (confirm) dispatch(deleteUsersBooking(date, _id));
  }, [_id, confirm, date, dispatch]);

  return (
    <div className="user-bookings__slot slot">
      <div className="user-bookings__slot number">{number + 1}.</div>
      <div className="user-bookings__slot date">{date}</div>
      <div className="user-bookings__slot hours">{hours}</div>
      <div className="user-bookings__slot cancel">
        <button className="cancel" onClick={() => setOpen(true)}>
          X
        </button>
      </div>
    </div>
  );
};

const userSlotWithConfirm = withConfirm(UserSlot);
export { userSlotWithConfirm as UserSlot };
