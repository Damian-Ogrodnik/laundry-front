import React from "react";
import { useSelector } from "react-redux";

export const Error = () => {
  const { error } = useSelector((state) => state.booking);

  return (
    error && (
      <div className="booking__wrapper">
        <div className="booking__error">{error}</div>
      </div>
    )
  );
};
