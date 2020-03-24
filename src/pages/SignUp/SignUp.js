import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "../../components/Error";

import { registerUser } from "../../redux/user/userUtils";
import { registrationSchema } from "../../common/validation";

const values = {
  Nickname: "",
  Email: "",
  Password: "",
  Repassword: ""
};

export const SignUp = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);

  return (
    <Formik
      initialValues={values}
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
          {Object.keys(values).map(value => (
            <div className="form__input">
              <label htmlFor={value}>{value}</label>
              <Field
                name={value}
                type={value === "Repassword" ? "password" : value}
              />
              <ErrorMessage name={value}>
                {msg => <div className="form__error">{msg}</div>}
              </ErrorMessage>
            </div>
          ))}
          <button className="form__button" type="submit">
            SUMBIT
          </button>
        </div>
      </Form>
    </Formik>
  );
};
