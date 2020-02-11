import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./css/main.css";

import store from "./redux/store";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { NavBar } from "./components/NavBar";
import { Booking } from "./pages/Booking";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <ProtectedRoute path="/" exact component={Home} />
            <ProtectedRoute path="/sign-in" type="sign-in" component={SignIn} />
            <ProtectedRoute path="/sign-up" type="sign-up" component={SignUp} />
            <ProtectedRoute
              path="/booking"
              secured={true}
              component={Booking}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
