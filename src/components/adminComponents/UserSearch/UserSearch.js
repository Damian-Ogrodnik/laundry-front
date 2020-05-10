import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { nicknameSchema } from "../../../common/validation";

const values = {
  Nickname: "",
};

export const UserSearch = ({ name }) => {
  return (
    <Formik
      initialValues={values}
      validationSchema={nicknameSchema}
      onSubmit={({ Nickname }) => {
        console.log(Nickname);
      }}
    >
      <Form className={name}>
        <Field name={"Nickname"} type="text" placeholder={"User Nickname"} />
        <ErrorMessage name={"Nickname"}>
          {(msg) => <div className="form__error">{msg}</div>}
        </ErrorMessage>
      </Form>
    </Formik>
  );
};
