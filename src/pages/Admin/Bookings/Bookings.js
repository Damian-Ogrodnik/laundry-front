import React from "react";

import { AdminSlots } from "components/adminComponents/AdminSlots";
import { Datepicker } from "components/Datepicker";
import { Logout } from "components/Logout";

export const Bookings = () => (
  <div className="bookings">
    <Datepicker name="bookings" />
    <AdminSlots />
    <Logout />
  </div>
);
