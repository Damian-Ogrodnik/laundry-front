import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/main.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
