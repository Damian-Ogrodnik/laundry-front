import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getUser } from "redux/admin/adminUtils";

export const AdminUser = () => {
  let { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const dispatch = useDispatch();
  return <div>{id}</div>;
};
