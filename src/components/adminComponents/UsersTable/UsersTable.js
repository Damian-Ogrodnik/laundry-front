import React from "react";
import { useSelector } from "react-redux";

import { Header } from "./Header";
import { Row } from "./Row";

export const UsersTable = ({ name }) => {
  const users = useSelector((store) => store.admin.users);
  return (
    <table className={name}>
      <Header />
      {users.map(({ name }) => (
        <Row key={name} name={name} />
      ))}
    </table>
  );
};
