import React from "react";

import { Logout } from "../../components/Logout";
import { UsersList } from "../../components/adminComponents/UsersList";
import { UserSearch } from "../../components/adminComponents/UserSearch";

export const AdminSearch = () => {
  return (
    <div className="admin-search">
      <UserSearch name={"admin-search__input"} />
      <UsersList name={"admin-search__list"} />
      <Logout />
    </div>
  );
};
