import React from "react";

import { UserSlot } from "../UserSlot";

export const UserSlots = ({ bookings }) => {
  return (
    <div className="user-bookings__slots">
      <div className="user-bookings__slot header">
        <div className="user-bookings__slot number">Number</div>
        <div className="user-bookings__slot date">Date</div>
        <div className="user-bookings__slot hours">Hours</div>
      </div>
      {bookings &&
        bookings.map((slot, index) => <UserSlot data={slot} number={index} />)}
    </div>
  );
};
