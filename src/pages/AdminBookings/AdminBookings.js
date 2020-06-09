import React from "react";

import { AdminSlots } from "components/adminComponents/AdminSlots";
import { Datepicker } from "components/Datepicker";
import { Logout } from "components/Logout";

export const AdminBookings = () => (
  <div className="admin-bookings">
    <Datepicker name="admin-bookings" />
    <AdminSlots />
    <Logout />
  </div>
);
