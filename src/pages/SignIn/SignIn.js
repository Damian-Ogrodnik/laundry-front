import React from "react";

import { login } from "../../data/login";
import { Redirect } from "react-router-dom";

export const SignIn = () => {
  const handleClick = () => {
    login.login();
    //setLogin(true);
  };

  const renderButton = () => {
    return (
      <div className="signin">
        <button onClick={() => handleClick()}>Login</button>
      </div>
    );
  };

  return login.authorization ? <Redirect to="/booking" /> : renderButton();
};

export default SignIn;
