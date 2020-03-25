import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import { FormWrapper } from "../../components/FormWrapper";

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
        <FormWrapper
          title={"Create Account"}
          action={"SUBMIT"}
          render={() => {
            return Object.keys(values).map(value => (
              <div key={value} className="form__input">
                <label htmlFor={value}>{value}</label>
                <Field
                  name={value}
                  type={value === "Repassword" ? "password" : value}
                />
                <ErrorMessage name={value}>
                  {msg => <div className="form__error">{msg}</div>}
                </ErrorMessage>
              </div>
            ));
          }}
        />
      </Form>
    </Formik>
  );
};
