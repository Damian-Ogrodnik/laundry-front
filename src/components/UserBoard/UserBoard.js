import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/user/userActions";

export const UserBoard = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      User Board <button onClick={() => logOut()}>Log out</button>
    </div>
  );
};
