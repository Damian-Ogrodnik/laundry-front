import React from "react";

export const UserSlot = ({ data: { date, hours } }) => {
  return (
    <div className="user-bookings__slot">
      <div className="user-bookings__slot date">{date}</div>
      <div className="user-bookings__slot hours">{hours}</div>
    </div>
  );
};
