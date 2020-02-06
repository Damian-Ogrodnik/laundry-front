import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { loginSchema } from "../../common/validation";
import { login } from "../../data/login";

export const SignIn = () => {
  const [logged, setLogin] = useState(false);

  const handleClick = () => {
    login.login();
    setLogin(true);
  };

  const renderButton = () => {
    return (
      <Formik
        initialValues={{
          nickName: "",
          password: ""
        }}
        validationSchema={loginSchema}
        onSubmit={() => {
          console.log(1);
          handleClick();
        }}
      >
        <Form className="signup">
          <div className="form__wrapper">
            <div className="form__input">
              <label htmlFor="nickName">Nickname</label>
              <Field name="nickName" type="text" />
              <ErrorMessage name="nickName">
                {msg => <div className="form__error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form__input">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password">
                {msg => <div className="form__error">{msg}</div>}
              </ErrorMessage>
            </div>
            <button className="form__button" type="submit">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    );
  };

  return logged ? <Redirect to="/booking" /> : renderButton();
};

export default SignIn;
