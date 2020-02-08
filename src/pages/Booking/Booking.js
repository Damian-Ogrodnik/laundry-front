import React from "react";
import { Redirect } from "react-router-dom";

import { login } from "../../data/login";
import { UserBoard } from "../../components/UserBoard";

export const Booking = () => {
  return login.authorization ? <UserBoard /> : <Redirect to="/sign-in" />;
};
