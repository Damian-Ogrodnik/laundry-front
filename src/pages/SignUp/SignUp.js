import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { registrationSchema } from "../../common/validation";

export const SignUp = () => {
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
