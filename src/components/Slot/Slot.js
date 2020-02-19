import React from "react";
import { useDispatch } from "react-redux";

import { selectSlot } from "../../redux/board/boardActions";

export const Slot = ({ hours, number, taken, selected }) => {
  const dispatch = useDispatch();
  console.log(selected);

  const checkStatus = () => {
    return taken
      ? "--taken"
      : selected
      ? "--available--selected"
      : "--available";
  };

  const renderButton = () => {
    dispatch(selectSlot(number));
    console.log(selected);
    return;
  };

  return (
    <div className={`booking__slot booking__slot${checkStatus()}`}>
      <h2>{hours}</h2>
      {taken && <h2>Booked</h2>}
      {!taken && <button onClick={() => renderButton()}>Select</button>}
    </div>
  );
};

export default Slot;
