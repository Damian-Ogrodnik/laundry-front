import React from "react";

import { AdminSlots } from "../../components/adminComponents/AdminSlots";
import { Datepicker } from "../../components/Datepicker";
import { Logout } from "../../components/Logout";

export const AdminBookings = () => {
  return (
    <div className="admin-bookings">
      <Datepicker name="admin-bookings" />
      <AdminSlots />
      <Logout />
    </div>
  );
};
