import React from "react";

import { AdminSlots } from "../../components/adminComponents/AdminSlots";
import { Datepicker } from "../../components/Datepicker";
import { Logout } from "../../components/Logout";

export const AdminBookings = () => {
  return (
    <div className="admin">
      <Datepicker name="admin" />
      <AdminSlots />
      <Logout />
    </div>
  );
};
