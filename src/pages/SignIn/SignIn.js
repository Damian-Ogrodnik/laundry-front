import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import { FormWrapper } from "components/FormWrapper";
import { Toast } from "components/Toast";

import { logUser } from "redux/user/userUtils";
import { loginSchema } from "common/validation";

const values = { Nickname: "", Password: "" };

export const SignIn = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={values}
      validationSchema={loginSchema}
      onSubmit={({ Nickname, Password }) =>
        dispatch(logUser(Nickname, Password))
      }
    >
      <Form className="signup">
        <Toast text={"Account Deleted"} toastType={"DELETE"} />
        <FormWrapper
          title={"Sign In"}
          action={"LOGIN"}
          render={() =>
            Object.keys(values).map((value) => (
              <div key={value} className="form__input">
                <label htmlFor={value}>{value}</label>
                <Field name={value} type={value} />
                <ErrorMessage name={value}>
                  {(msg) => <div className="form__error">{msg}</div>}
                </ErrorMessage>
              </div>
            ))
          }
        />
      </Form>
    </Formik>
  );
};
