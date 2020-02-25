import React from "react";
import { useDispatch } from "react-redux";

import { selectSlot } from "../../redux/board/boardActions";

export const Slot = ({ hours, number, taken, selected, user }) => {
  const dispatch = useDispatch();
  const checkStatus = () => {
    return taken
      ? "--taken"
      : selected
      ? "--available--selected"
      : "--available";
  };

  return (
    <div className={`booking__slot booking__slot${checkStatus()}`}>
      <h2>{hours}</h2>
      {taken && <h2>Booked</h2>}
      {!taken && (
        <button onClick={() => dispatch(selectSlot({ number, hours }))}>
          Select
        </button>
      )}
      {user && <div>Your booking</div>}
    </div>
  );
};

export default Slot;
