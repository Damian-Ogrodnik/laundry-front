import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSlot } from "../../redux/board/boardActions";
import { checkAvailability } from "../../services/Date";

import { withConfirm } from "../withConfirm";

import { deleteUsersBooking } from "../../redux/userBookings/userBookingsUtils";

const Slot = ({
  hours,
  number,
  taken,
  selected,
  user,
  lastBooking,
  setOpen,
  confirm,
  id
}) => {
  const [unavailable, setUnavailability] = useState(taken);
  const date = useSelector(state => state.board.date);
  const dispatch = useDispatch();

  useEffect(() => {
    async function check() {
      let avaiability = await checkAvailability(date, lastBooking);
      if (!avaiability) setUnavailability(true);
    }
    check();
  });

  useEffect(() => {
    if (confirm) dispatch(deleteUsersBooking(date, id, true));
  }, [confirm, date, dispatch, id]);

  const checkStatus = () => {
    return unavailable
      ? "--taken"
      : selected
      ? "--available--selected"
      : "--available";
  };

  return (
    <div className={`booking__slot booking__slot${checkStatus()}`}>
      <h2>{hours}</h2>
      {unavailable && !user && <h2>Unavailable</h2>}
      {user && (
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
