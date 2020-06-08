import React from "react";
import { useSelector } from "react-redux";

import { Header } from "./Header";
import { Row } from "./Row";

export const UsersTable = () => {
  const users = useSelector((store) => store.admin.users);
  return (
    <table>
      <Header />
      <tbody>
        {users.length &&
          users.map(({ name }) => <Row key={name} name={name} />)}
      </tbody>
    </table>
  );
};
