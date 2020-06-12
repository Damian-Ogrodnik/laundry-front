import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBack } from "react-icons/md";

import { getUser, getUserBookings } from "redux/admin/adminUtils";
import { UserTable } from "components/UserTable";
import { Toast } from "components/Toast";
import { IconProvider } from "components/IconProvider";

export const AdminUser = () => {
  const { name, email, date } = useSelector(({ admin }) => admin.user);
  const { userBookings } = useSelector(({ admin }) => admin);
  const dispatch = useDispatch();
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserBookings(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="admin-user">
      <div className="admin-user__arrow" onClick={() => history.goBack()}>
        <IconProvider icon={<MdArrowBack />} />
      </div>
      <h2>User Details</h2>
      <div className="admin-user__details">
        <p>
          <span>Nickname:</span> {name}
        </p>
        <p>
          <span>Email:</span> {email}
        </p>
        <p>
          <span>Joining date:</span> {date ? date.slice(0, 10) : null}
        </p>
      </div>
      <h3>User Bookings</h3>
      {userBookings && <UserTable bookings={userBookings} />}
      <Toast text={"Slot deleted"} toastType="DELETE" />
    </div>
  );
};
