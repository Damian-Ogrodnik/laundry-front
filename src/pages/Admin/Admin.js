import React from "react";

import { Logout } from "../../components/Logout";
import { Datepicker } from "../../components/Datepicker";

export const Admin = () => {
  return (
    <div className="admin">
      <Datepicker name="admin" />
      <Logout />
    </div>
  );
};
