import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/user/userActions";

export const Logout = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <button className={name} onClick={() => dispatch(logout())}>
      Log out
    </button>
  );
};
