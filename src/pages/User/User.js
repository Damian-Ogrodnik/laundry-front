import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { changePasswordSchema } from "../../common/validation";
import { changePassword } from "../../redux/user/userUtils";

import { Delete } from "../../components/Delete";
import { FormWrapper } from "../../components/FormWrapper";
import { Logout } from "../../components/Logout";
import { Toast } from "../../components/Toast";

const values = {
  Password: "",
  newPassword: "",
  newPasswordConfirm: ""
};

export const User = () => {
  const dispatch = useDispatch();
  return (
    <div className="user-page">
      <Toast text={"Password Changed"} toastType={"CHANGE"} />
      <Formik
        initialValues={values}
        validationSchema={changePasswordSchema}
        onSubmit={({ Password, newPassword }, { resetForm }) => {
          resetForm({});
          dispatch(changePassword(Password, newPassword));
        }}
      >
        <Form className="signup">
          <FormWrapper
            title={"Change Password"}
            action={"CHANGE"}
            render={() => {
              return Object.keys(values).map(value => (
                <div key={value} className="form__input">
                  <label htmlFor={value}>
                    {value === "Password"
                      ? value
                      : value === "newPassword"
                      ? "New Password"
                      : "Confirm New Password"}
                  </label>
                  <Field name={value} type="Password" />
                  <ErrorMessage name={value}>
                    {msg => <div className="form__error">{msg}</div>}
                  </ErrorMessage>
                </div>
              ));
            }}
          />
        </Form>
      </Formik>
      <Delete name={"delete"} />
      <Logout name={"logout"} />
    </div>
  );
};
