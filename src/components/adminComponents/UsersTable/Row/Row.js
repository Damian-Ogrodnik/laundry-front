import React from "react";
import { Link } from "react-router-dom";

export const Row = ({ name }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <Link to={`/admin/user/:${name}`}>Details</Link>
      </td>
      <td>Block</td>
      <td>Delete</td>
    </tr>
  );
};
