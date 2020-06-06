import React from "react";

import { Logout } from "components/Logout";
import { UsersTable } from "components/adminComponents/UsersTable";
import { UserSearch } from "components/adminComponents/UserSearch";

export const AdminSearch = () => {
  return (
    <div className="admin-search">
      <UserSearch name={"admin-search__input"} />
      <UsersTable />
      <Logout />
    </div>
  );
};
