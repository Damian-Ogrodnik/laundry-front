import React from "react";

import { login } from "../../data/login";

export const UserBoard = () => {
  const logOut = async () => {
    login.logout();
    console.log(login.authorization);
  };

  return (
    <div>
      User Board <button onClick={() => logOut()}>Log out</button>
    </div>
  );
};
