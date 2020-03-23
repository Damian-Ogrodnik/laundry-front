import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { changePasswordSchema } from "../../common/validation";
import { changePassword } from "../../redux/user/userUtils";

import { Delete } from "../../components/Delete";
import { Logout } from "../../components/Logout";

export const User = () => {
  const dispatch = useDispatch();
  return (
    <div className="user-page">
      <Formik
        initialValues={{
          password: "",
          repassword: "",
          repasswordConfirm: ""
        }}
        validationSchema={changePasswordSchema}
        onSubmit={({ password, repassword }) => {
          dispatch(changePassword(password, repassword));
        }}
      >
        <Form className="signup">
          <div className="form__wrapper">
            <h2>Change Password</h2>
            <div className="form__input">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password">
                {msg => <div className="form__error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form__input">
              <label htmlFor="repassword">New Paswordd</label>
              <Field name="repassword" type="password" />
              <ErrorMessage name="repassword">
                {msg => <div className="form__error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form__input">
              <label htmlFor="repasswordConfirm">Confirm New Password</label>
              <Field name="repasswordConfirm" type="password" />
              <ErrorMessage name="repasswordConfirm">
                {msg => <div className="form__error">{msg}</div>}
              </ErrorMessage>
            </div>
            <button className="form__button" type="submit">
              CHANGE
            </button>
          </div>
        </Form>
      </Formik>
      <Delete name={"delete"} />
      <Logout name={"logout"} />
    </div>
  );
};
