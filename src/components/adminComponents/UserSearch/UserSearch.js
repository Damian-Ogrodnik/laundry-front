import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";

import { getUsers } from "../../../redux/admin/adminUtils";

const values = {
  Nickname: "",
};

export const UserSearch = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={values}
      onSubmit={({ Nickname }) => {
        dispatch(getUsers(Nickname));
      }}
    >
      <Form className={name}>
        <Field name={"Nickname"} type="text" placeholder={"User Nickname"} />
      </Form>
    </Formik>
  );
};
