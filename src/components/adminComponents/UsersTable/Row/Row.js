import React from "react";
import { Link } from "react-router-dom";

export const Row = ({ name, id }) => (
  <tr>
    <td>{name}</td>
    <td>
      <Link to={`/admin/user/${id}`}>
        <button>Details</button>
      </Link>
    </td>
    <td>
      <Link to={`/admin/user/password/${id}`}>
        <button>Password</button>
      </Link>
    </td>
    <td>
      <button>Block</button>
    </td>
    <td>
      <button>Delete</button>
    </td>
  </tr>
);
