import React from "react";

import { Logout } from "../../components/Logout";

export const UserBookings = () => {
  return (
    <div className="user-bookings">
      <h1>User Bookings</h1>
      <Logout name={"logout"} />
    </div>
  );
};
