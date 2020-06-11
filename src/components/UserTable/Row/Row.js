import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { withConfirm } from "HOC/withConfirm";

import { deleteUsersBooking } from "redux/userBookings/userBookingsUtils";
import { deleteSelectedSlot } from "redux/admin/adminUtils";

const Row = ({ confirm, data: { date, hours, _id }, number, setOpen }) => {
  const { isAdmin } = useSelector((store) => store.user);
  const userId = useSelector((store) => store.admin.user._id);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAdmin && confirm) dispatch(deleteUsersBooking(date, _id));
  }, [_id, confirm, date, dispatch, id, isAdmin, userId]);

  const deleteSlot = () =>
    dispatch(deleteSelectedSlot(date, _id, isAdmin, userId));

  return (
    <tr>
      <td>{number + 1}.</td>
      <td>{date}</td>
      <td>{hours}</td>
      <td>
        <button
          className="cancel"
          onClick={() => (isAdmin ? deleteSlot() : setOpen(true))}
        >
          X
        </button>
      </td>
    </tr>
  );
};

const rowWithConfirm = withConfirm(Row);
export { rowWithConfirm as Row };
