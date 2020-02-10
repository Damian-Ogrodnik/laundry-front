import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
            <Route path="/" exact component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <ProtectedRoute path="/booking" component={Booking} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
