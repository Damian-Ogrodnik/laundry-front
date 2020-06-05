import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "redux/user/userActions";

export const Logout = () => {
  const dispatch = useDispatch();
  return (
    <button className="logout" onClick={() => dispatch(logout())}>
      LOGOUT
    </button>
  );
};
