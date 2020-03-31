import React from "react";

import { useDateCheck } from "../../../custom-hooks";
import { withBookingModal } from "../withBookingModal";

const AdminSlot = ({ id, hours, taken, lastBooking, setOpen }) => {
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
          <p>Available</p> <button onClick={() => setOpen(true)}>BOOK</button>
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

const adminSlotWithBookingModal = withBookingModal(AdminSlot);
export { adminSlotWithBookingModal as AdminSlot };
