import React from "react";
import { useSelector } from "react-redux";

export const UsersList = () => {
  const users = useSelector((store) => store.admin.users);
  return <div>{users && users.map(({ name }) => <div>{name}</div>)}</div>;
};
