import React from "react";

import { withError } from "HOC/withError";
import { UserSlot } from "components/UserSlot";

const UserSlots = ({ bookings }) => {
  return (
    <div className="user-bookings__slots">
      <h2>Bookings List</h2>
      <div className="user-bookings__slot header">
        <div className="user-bookings__slot number">Number</div>
        <div className="user-bookings__slot date">Date</div>
        <div className="user-bookings__slot hours">Hours</div>
        <div className="user-bookings__slot cancel">Cancel</div>
      </div>
      {bookings &&
        bookings.map((slot, index) => (
          <UserSlot key={index} data={slot} number={index} />
        ))}
      {!bookings.length && (
        <div className="user-bookings__information">
          Your booking list is empty.
        </div>
      )}
    </div>
  );
};

const userSlotsWithError = withError(UserSlots);
export { userSlotsWithError as UserSlots };
