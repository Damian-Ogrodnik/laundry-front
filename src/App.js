import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./css/main.css";
import "react-toastify/dist/ReactToastify.css";

import store from "./redux/store";

import { Route } from "./components/Route";

import { NavBar } from "./components/NavBar";

import { Admin } from "./pages/Admin";
import { Booking } from "./pages/Booking";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search/Search";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { User } from "./pages/User";
import { UserBookings } from "./pages/UserBookings";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/admin" secured component={Admin} />
            <Route path="/booking" component={Booking} secured />
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} secured />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/user" component={User} secured />
            <Route path="/user-bookings" component={UserBookings} secured />
          </Switch>
          <ToastContainer autoClose={3000} />
        </div>
      </Router>
    </Provider>
  );
};
