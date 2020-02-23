import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUsersBookings } from "../../redux/userBookings/userBookingsUtils";
import { Logout } from "../../components/Logout";

export const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersBookings());
  }, [dispatch]);

  return (
    <div className="user-page">
      <h1>User Board</h1>
      <Logout name={"logout"} />
    </div>
  );
};
