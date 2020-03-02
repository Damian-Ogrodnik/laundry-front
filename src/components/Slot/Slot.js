import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSlot } from "../../redux/board/boardActions";
import { checkAvailability } from "../../services/Date";

export const Slot = ({ hours, number, taken, selected, user, lastBooking }) => {
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
      {user && <h2>Your booking</h2>}
      {!unavailable && (
        <button onClick={() => dispatch(selectSlot({ number, hours }))}>
          Select
        </button>
      )}
    </div>
  );
};

export default Slot;
