import React from "react";
import { useDispatch } from "react-redux";

export const Alert = ({ text, action }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => dispatch(action())}>OK</button>
    </div>
  );
};
