import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import { logUser } from "../../redux/user/userUtils";
import { loginSchema } from "../../common/validation";

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleClick = async state => {
    const { nickName, password } = state;
    dispatch(logUser(nickName, password));
  };

  return (
    <Formik
      initialValues={{
        nickName: "",
        password: ""
      }}
      validationSchema={loginSchema}
      onSubmit={state => {
        handleClick(state);
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

export default SignIn;
