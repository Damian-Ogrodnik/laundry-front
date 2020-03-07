import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/login/loginActions";

export const Logout = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <button className={name} onClick={() => dispatch(logout())}>
      LOGOUT
    </button>
  );
};
