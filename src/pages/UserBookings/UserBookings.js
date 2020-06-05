import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsersBookings } from "redux/userBookings/userBookingsUtils";

import { Logout } from "components/Logout";
import { UserSlots } from "components/UserSlots";

export const UserBookings = () => {
  const { error, loading, userBookings } = useSelector(
    (state) => state.userBookings
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersBookings());
  }, [dispatch]);

  return (
    <div className="user-bookings">
      <UserSlots bookings={userBookings} error={error} loading={loading} />
      <Logout />
    </div>
  );
};
