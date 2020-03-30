import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { checkAvailability } from "../../../services/Date";

export const AdminSlot = ({ id, hours, taken, lastBooking, ...props }) => {
  const [unavailable, setUnavailability] = useState(taken);
  const date = useSelector(state => state.board.date);

  useEffect(() => {
    async function check() {
      let avaiability = await checkAvailability(date, lastBooking);
      if (!avaiability) setUnavailability(true);
    }
    check();
  });

  return (
    <div
      className={`booking__slot booking__slot${
        unavailable ? "--taken" : "--available"
      }`}
    >
      <h2>{hours}</h2>
      {id && !unavailable && (
        <>
          <p>Taken</p> <button>DETAILS</button>
        </>
      )}
      {!id && !unavailable && (
        <>
          <p>Available</p> <button>BOOK</button>
        </>
      )}
      {unavailable && (
        <>
          <p>Unavailable</p>
        </>
      )}
    </div>
  );
};
