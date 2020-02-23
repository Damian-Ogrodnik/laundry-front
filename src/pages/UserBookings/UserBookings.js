import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUsersBookings } from "../../redux/userBookings/userBookingsUtils";

import { Logout } from "../../components/Logout";

export const UserBookings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersBookings());
  }, [dispatch]);

  return (
    <div className="user-bookings">
      <h1>User Bookings</h1>
      <Logout name={"logout"} />
    </div>
  );
};
