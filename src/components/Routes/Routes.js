import React from "react";
import { Switch } from "react-router-dom";

import { Route } from "components/Route";

import { AdminBookings } from "pages/AdminBookings";
import { AdminSearch } from "pages/AdminSearch";
import { BookingBoard } from "pages/BookingBoard";
import { Home } from "pages/Home";
import { SignIn } from "pages/SignIn";
import { SignUp } from "pages/SignUp";
import { User } from "pages/User";
import { UserBookings } from "pages/UserBookings";
import { AdminUser } from "pages/AdminUser";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/admin" component={AdminBookings} secured />
      <Route path="/admin/search" component={AdminSearch} secured />
      <Route path="/admin/user/:id" component={AdminUser} secured />
      <Route path="/booking-board" component={BookingBoard} secured />
      <Route exact path="/" component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/user" component={User} secured />
      <Route path="/user-bookings" component={UserBookings} secured />
    </Switch>
  );
};
