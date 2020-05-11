import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import { nicknameSchema } from "../../../common/validation";
import { getUsers } from "../../../redux/admin/adminUtils";

const values = {
  Nickname: "",
};

export const UserSearch = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={values}
      validationSchema={nicknameSchema}
      onSubmit={({ Nickname }) => {
        dispatch(getUsers(Nickname));
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
