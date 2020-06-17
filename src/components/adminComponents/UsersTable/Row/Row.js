import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { handleBlockStatus } from "redux/admin/adminUtils";

export const Row = ({ name, id, isBlocked }) => {
  const [block, setBlock] = useState(isBlocked);
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td>
        <Link to={`/admin/user/${id}`}>
          <button>Details</button>
        </Link>

        <Link to={`/admin/user/password/${id}`}>
          <button>Password</button>
        </Link>

        <button
          onClick={() => {
            dispatch(handleBlockStatus(id, block));
            setBlock(!block);
          }}
        >
          {block ? "Unblock" : "Block"}
        </button>
        <button onClick={() => alert("Functionality disabled")}>Delete</button>
      </td>
    </tr>
  );
};
