import React from "react";

import { Logout } from "../../components/Logout";
import { Datepicker } from "../../components/Datepicker";
import { AdminSlots } from "../../components/adminComponents/AdminSlots";

export const Admin = () => {
  return (
    <div className="admin">
      <Datepicker name="admin" />
      <AdminSlots />
      <Logout />
    </div>
  );
};
