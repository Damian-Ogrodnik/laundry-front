import React from "react";

import { Header } from "./Header";
import { Information } from "./Information";
import { Row } from "./Row";

export const UsersTable = ({ users }) => (
  <table>
    <Header />
    <tbody>
      {users.length ? (
        users.map(({ ...props }, index) => <Row key={index} {...props} />)
      ) : (
        <Information />
      )}
    </tbody>
  </table>
);
