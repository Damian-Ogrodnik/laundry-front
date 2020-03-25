import React from "react";

import { Loader } from "../Loader";
import { Error } from "../Error";

export const withError = WrappedComponent => ({ error, loading, ...props }) => {
  return loading ? (
    <Loader />
  ) : error ? (
    <Error
      errorMsg={"Ooops... Something went wrong. Try again later."}
      name={"main"}
      icon={true}
    />
  ) : (
    <WrappedComponent {...props} />
  );
};
