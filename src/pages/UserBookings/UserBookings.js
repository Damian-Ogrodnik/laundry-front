import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsersBookings } from "../../redux/userBookings/userBookingsUtils";

import { Logout } from "../../components/Logout";
import { UserSlots } from "../../components/UserSlots";

export const UserBookings = () => {
  const bookings = useSelector(state => state.userBookings.userBookings);
  const error = useSelector(state => state.userBookings.error);
  const loading = useSelector(state => state.userBookings.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersBookings());
  }, [dispatch]);

  return (
    <div className="user-bookings">
      <UserSlots bookings={bookings} error={error} loading={loading} />
      <Logout name={"logout"} />
    </div>
  );
};
