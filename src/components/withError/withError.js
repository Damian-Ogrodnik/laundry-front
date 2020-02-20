import React from "react";

export const withError = WrappedComponent => ({ error, ...props }) => {
  const renderComponent = () => {
    if (error) {
      return <div>Ooops... Something went wrong. Try again later.</div>;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return renderComponent();
};
