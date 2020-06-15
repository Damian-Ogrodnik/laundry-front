import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { adminChangePasswordSchema } from "services/validation";
import { changePassword } from "redux/user/userUtils";

import { BackArrow } from "components/BackArrow";
import { FormWrapper } from "components/FormWrapper";
import { Toast } from "components/Toast";

const values = {
  newPassword: "",
  newPasswordConfirm: "",
};

export const Password = () => {
  const dispatch = useDispatch();
  return (
    <div className="password">
      <BackArrow />
      <Toast text={"Password Changed"} toastType={"CHANGE"} />
      <Formik
        initialValues={values}
        validationSchema={adminChangePasswordSchema}
        onSubmit={({ Password, newPassword }, { resetForm }) => {
          resetForm({});
          dispatch(changePassword(Password, newPassword));
        }}
      >
        <Form className="password__form">
          <FormWrapper
            title={"Change Password"}
            action={"CHANGE"}
            render={() =>
              Object.keys(values).map((value) => (
                <div key={value} className="form__input">
                  <label htmlFor={value}>
                    {value === "newPassword"
                      ? "New Password"
                      : "Confirm New Password"}
                  </label>
                  <Field name={value} type="Password" />
                  <ErrorMessage name={value}>
                    {(msg) => <div className="form__error">{msg}</div>}
                  </ErrorMessage>
                </div>
              ))
            }
          />
        </Form>
      </Formik>
    </div>
  );
};
