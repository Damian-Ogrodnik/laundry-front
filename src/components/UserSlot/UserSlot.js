import React from "react";
import { useDispatch } from "react-redux";

import { deleteUsersBooking } from "../../redux/userBookings/userBookingsUtils";

export const UserSlot = ({ data: { date, hours, _id }, number }) => {
  const dispatch = useDispatch();

  const deleteSlot = () => {
    dispatch(deleteUsersBooking(date, _id));
  };

  return (
    <div className="user-bookings__slot">
      <div className="user-bookings__slot number">{number + 1}</div>
      <div className="user-bookings__slot date">
        {number + 1}.{date}
      </div>
      <div className="user-bookings__slot hours">{hours}</div>
      <div className="user-bookings__slot cancel">
        <button className="cancel" onClick={async () => deleteSlot()}>
          X
        </button>
      </div>
    </div>
  );
};
