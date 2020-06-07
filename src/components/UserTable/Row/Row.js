import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { withConfirm } from "HOC/withConfirm";

import { deleteUsersBooking } from "redux/userBookings/userBookingsUtils";

const Row = ({ confirm, data: { date, hours, _id }, number, setOpen }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (confirm) dispatch(deleteUsersBooking(date, _id));
  }, [_id, confirm, date, dispatch]);

  return (
    <tr>
      <td>{number + 1}.</td>
      <td>{date}</td>
      <td>{hours}</td>
      <td>
        <button className="cancel" onClick={() => setOpen(true)}>
          X
        </button>
      </td>
    </tr>
  );
};

const rowWithConfirm = withConfirm(Row);
export { rowWithConfirm as Row };
