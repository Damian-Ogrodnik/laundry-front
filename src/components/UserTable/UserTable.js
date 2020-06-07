import React from "react";

import { Header } from "./Header";
import { withError } from "HOC/withError";
import { Information } from "./Information";
import { Row } from ".//Row";

const UserTable = ({ bookings }) => {
  return (
    <table>
      <Header />
      <tbody>
        {bookings.length ? (
          bookings.map((slot, index) => (
            <Row key={index} data={slot} number={index} />
          ))
        ) : (
          <Information />
        )}
      </tbody>
    </table>
  );
};

const userTableWithError = withError(UserTable);
export { userTableWithError as UserTable };
