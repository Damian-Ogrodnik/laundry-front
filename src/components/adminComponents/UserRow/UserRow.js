import React from "react";

export const UserRow = ({ name = "Username", header }) => {
  return (
    <div>
      <p>{name}</p>
      {header && <p>Actions</p>}
    </div>
  );
};
