import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { registrationSchema } from "../../common/validation";

export const SignUp = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
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
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        <label htmlFor="repassword">Confirm Password</label>
        <Field name="repassword" type="password" />
        <ErrorMessage name="repassword" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
