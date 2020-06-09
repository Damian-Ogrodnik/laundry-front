import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getUser } from "redux/admin/adminUtils";

export const AdminUser = () => {
  let { id } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);

  const dispatch = useDispatch();
  return <div>{id}</div>;
};
