import React from "react";

export const UserSlot = ({ data: { date, hours }, number }) => {
  return (
    <div className="user-bookings__slot">
      <div className="user-bookings__slot number">{number + 1}</div>
      <div className="user-bookings__slot date">
        {number + 1}.{date}
      </div>
      <div className="user-bookings__slot hours">{hours}</div>
    </div>
  );
};
