import React from "react";
import { useSelector } from "react-redux";

import { UserRow } from "../UserRow";

export const UsersList = ({ name }) => {
  const users = useSelector((store) => store.admin.users);
  return (
    <div className={name}>
      <UserRow header />
      {users && users.map(({ name }) => <UserRow key={name} name={name} />)}
    </div>
  );
};
