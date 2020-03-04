import React from "react";

import { deleteSlot } from "../../services/Booking";

export const UserSlot = ({ data: { date, hours, _id }, number }) => {
  return (
    <div className="user-bookings__slot">
      <div className="user-bookings__slot number">{number + 1}</div>
      <div className="user-bookings__slot date">
        {number + 1}.{date}
      </div>
      <div className="user-bookings__slot hours">{hours}</div>
      <div className="user-bookings__slot cancel">
        <button className="cancel" onClick={() => deleteSlot(date, _id)}>
          X
        </button>
      </div>
    </div>
  );
};
