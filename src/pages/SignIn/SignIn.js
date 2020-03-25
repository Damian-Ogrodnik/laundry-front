import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "../../components/Error";
import { Toast } from "../../components/Toast";

import { logUser } from "../../redux/user/userUtils";
import { loginSchema } from "../../common/validation";

const values = { Nickname: "", Password: "" };

export const SignIn = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);

  return (
    <Formik
      initialValues={values}
      validationSchema={loginSchema}
      onSubmit={({ Nickname, Password }) => {
        dispatch(logUser(Nickname, Password));
      }}
    >
      <Form className="signup">
        <Toast text={"Account Deleted"} toastType={"DELETE"} />
        <div className="form__wrapper">
          <h2>Sign In</h2>
          {error && <Error name="form__error main" errorMsg={error} />}
          {Object.keys(values).map(value => (
            <div key={value} className="form__input">
              <label htmlFor={value}>{value}</label>
              <Field name={value} type={value} />
              <ErrorMessage name={value}>
                {msg => <div className="form__error">{msg}</div>}
              </ErrorMessage>
            </div>
          ))}
          <button className="form__button" type="submit">
            LOGIN
          </button>
        </div>
      </Form>
    </Formik>
  );
};
