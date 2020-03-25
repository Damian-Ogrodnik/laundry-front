import React from "react";
import { useSelector } from "react-redux";

import { Error } from "../Error";

export const FormWrapper = ({ action, title, render }) => {
  const error = useSelector(state => state.user.error);
  return (
    <div className="form__wrapper">
      <h2>{title}</h2>
      {error && <Error name="form__error main" errorMsg={error} />}
      {render()}
      <button className="form__button" type="submit">
        {action}
      </button>
    </div>
  );
};
