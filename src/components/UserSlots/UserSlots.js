import React from "react";

import { UserSlot } from "../UserSlot";

export const UserSlots = ({ bookings }) => {
  return (
    <div className="user-bookings__slots">
      {bookings && bookings.map(slot => <UserSlot data={slot} />)}
    </div>
  );
};
