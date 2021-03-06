import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSlot } from "redux/board/boardActions";
import { useDateCheck } from "custom-hooks";

import { withConfirm } from "HOC/withConfirm";

import { deleteUsersBooking } from "redux/userBookings/userBookingsUtils";

const Slot = ({
  confirm,
  props: { hours, id, lastBooking, number },
  selected,
  setOpen,
  taken,
}) => {
  let [unavailable, style] = useDateCheck(taken, lastBooking, selected);
  const date = useSelector((state) => state.board.date);
  const dispatch = useDispatch();

  useEffect(() => {
    if (confirm) dispatch(deleteUsersBooking(date, id, true));
  }, [confirm, date, dispatch, id, number]);

  return (
    <div className={`booking__slot booking__slot${style}`}>
      <h2>{hours}</h2>
      {unavailable && !id && <h2>Unavailable</h2>}
      {id && (
        <>
          <h2 className="booking__slot__info">Your Booking</h2>
          <button onClick={() => setOpen(true)}>Cancel</button>
        </>
      )}
      {!unavailable && (
        <button onClick={() => dispatch(selectSlot({ number, hours }))}>
          SELECT
        </button>
      )}
    </div>
  );
};

const slotWithConfirm = withConfirm(Slot);
export { slotWithConfirm as Slot };
