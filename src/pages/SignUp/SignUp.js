import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "../../components/Error";

import { registerUser } from "../../redux/user/userUtils";
import { registrationSchema } from "../../common/validation";

export const SignUp = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);

  return (
    <Formik
      initialValues={{
        nickName: "",
        email: "",
        password: "",
        repassword: ""
      }}
      validationSchema={registrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(registerUser(values));
        setSubmitting(false);
      }}
    >
      <Form className="signup">
        <div className="form__wrapper">
          <h2>Create Account</h2>
          {error && <Error name="form__error main" errorMsg={error} />}
          <div className="form__input">
            <label htmlFor="nickName">Nickname</label>
            <Field name="nickName" type="text" />
            <ErrorMessage name="nickName">
              {msg => <div className="form__error">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="form__input">
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email">
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
          <div className="form__input">
            <label htmlFor="repassword">Confirm Password</label>
            <Field name="repassword" type="password" />
            <ErrorMessage name="repassword">
              {msg => <div className="form__error">{msg}</div>}
            </ErrorMessage>
          </div>
          <button className="form__button" type="submit">
            SUMBIT
          </button>
        </div>
      </Form>
    </Formik>
  );
};
