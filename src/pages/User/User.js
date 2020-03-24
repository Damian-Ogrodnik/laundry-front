import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { changePasswordSchema } from "../../common/validation";
import { changePassword } from "../../redux/user/userUtils";

import { Delete } from "../../components/Delete";
import { Error } from "../../components/Error";
import { Logout } from "../../components/Logout";
import { Toast } from "../../components/Toast";

export const User = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);
  return (
    <div className="user-page">
      <Toast text={"Password Changed"} toastType={"CHANGE"} />
      <Formik
        initialValues={{
          password: "",
          repassword: "",
          repasswordConfirm: ""
        }}
        validationSchema={changePasswordSchema}
        onSubmit={({ password, repassword }, { resetForm }) => {
          resetForm({});
          dispatch(changePassword(password, repassword));
        }}
      >
        <Form className="signup">
          <div className="form__wrapper">
            <h2>Change Password</h2>
            {error && <Error name="form__error main" errorMsg={error} />}
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
