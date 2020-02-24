import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsersBookings } from "../../redux/userBookings/userBookingsUtils";

import { Logout } from "../../components/Logout";
import { UserSlots } from "../../components/UserSlots";

export const UserBookings = () => {
  const bookings = useSelector(state => state.userBookings.userBookings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersBookings());
  }, [dispatch]);

  return (
    <div className="user-bookings">
      <h1>User Bookings List</h1>
      <UserSlots bookings={bookings} />
      <Logout name={"logout"} />
    </div>
  );
};
