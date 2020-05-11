import React from "react";

import { Logout } from "../../components/Logout";
import { UserList } from "../../components/adminComponents/UserList";
import { UserSearch } from "../../components/adminComponents/UserSearch";

export const AdminSearch = () => {
  return (
    <div className="admin-search">
      <UserSearch name={"admin-search__input"} />
      <UserList />
      <Logout />
    </div>
  );
};
