import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./css/main.css";
import "react-toastify/dist/ReactToastify.css";

import store from "redux/store";

import { NavBar } from "components/NavBar";
import { Routes } from "components/Routes";

export const App = () => (
  <Provider store={store}>
    <Router basename="/laundry-front">
      <div className="App">
        <NavBar />
        <Routes />
        <ToastContainer autoClose={2000} />
      </div>
    </Router>
  </Provider>
);
