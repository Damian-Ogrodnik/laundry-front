import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUsersBookings } from "../../redux/userBookings/userBookingsUtils";

export const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersBookings());
  }, [dispatch]);

  return (
    <div>
      <h1>User Board</h1>
    </div>
  );
};
