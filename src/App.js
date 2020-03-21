import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./css/main.css";
import "react-toastify/dist/ReactToastify.css";

import store from "./redux/store";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { NavBar } from "./components/NavBar";
import { Booking } from "./pages/Booking";
import { Home } from "./pages/Home";
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
            <ProtectedRoute path="/home" exact component={Home} />
            <ProtectedRoute path="/sign-in" exact component={SignIn} />
            <ProtectedRoute path="/sign-up" exact component={SignUp} />
            <ProtectedRoute path="/user" secured={true} component={User} />
            <ProtectedRoute
              path="/booking"
              secured={true}
              component={Booking}
            />
            <ProtectedRoute
              path="/user-bookings"
              secured={true}
              component={UserBookings}
            />
          </Switch>
          <ToastContainer />
        </div>
      </Router>
    </Provider>
  );
};
