import React from "react";

export const Burger = ({ active, setActive }) => (
  <div
    className={`mobile burger ${active ? "active" : ""}`}
    onClick={() => setActive(!active)}
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
);
