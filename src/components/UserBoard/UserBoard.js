import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/user/userActions";

export const UserBoard = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div className="userboard__wrapper">
      <div className="userboard">User Board</div>
      <button onClick={() => logOut()}>Log out</button>
    </div>
  );
};
