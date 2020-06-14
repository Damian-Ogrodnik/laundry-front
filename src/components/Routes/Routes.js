import React from "react";
import { Switch } from "react-router-dom";

import { Route } from "components/Route";

import { Bookings } from "pages/Admin/Bookings";
import { Password } from "pages/Admin/Password";
import { BookingBoard } from "pages/BookingBoard";
import { Home } from "pages/Home";
import { SignIn } from "pages/SignIn";
import { SignUp } from "pages/SignUp";
import { User } from "pages/User";
import { UserBookings } from "pages/UserBookings";
import { UserDetails } from "pages/Admin/UserDetails";
import { UsersSearch } from "pages/Admin/UsersSearch";

export const Routes = () => (
  <Switch>
    <Route exact path="/admin" component={Bookings} secured />
    <Route exact path="/admin/search" component={UsersSearch} secured />
    <Route exact path="/admin/user/:id" component={UserDetails} secured />
    <Route exact path="/admin/user/password/:id" component={Password} secured />
    <Route path="/booking-board" component={BookingBoard} secured />
    <Route exact path="/" component={Home} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    x`
    <Route path="/user" component={User} secured />
    <Route path="/user-bookings" component={UserBookings} secured />
  </Switch>
);
