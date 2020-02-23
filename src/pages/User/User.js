import React from "react";

import { Logout } from "../../components/Logout";

export const User = () => {
  return (
    <div className="user-page">
      <h1>User Board</h1>
      <Logout name={"logout"} />
    </div>
  );
};
