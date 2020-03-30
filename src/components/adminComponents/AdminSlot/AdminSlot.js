import React from "react";

import { useDateCheck } from "../../../custom-hooks";

export const AdminSlot = ({ id, hours, taken, lastBooking }) => {
  let [unavailable, style] = useDateCheck(taken, lastBooking);

  return (
    <div className={`booking__slot booking__slot${style}`}>
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
