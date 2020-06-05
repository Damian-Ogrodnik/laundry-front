import React from "react";
import { useSelector } from "react-redux";

import { Error } from "components/Error";

export const FormWrapper = ({ action, title, render }) => {
  const error = useSelector((state) => state.user.error);
  return (
    <div className="form__wrapper">
      {error && <Error name="form__error main" errorMsg={error} />}
      <h2>{title}</h2>
      {render()}
      <button className="form__button" type="submit">
        {action}
      </button>
    </div>
  );
};
