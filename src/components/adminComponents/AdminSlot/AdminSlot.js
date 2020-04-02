import React from "react";
import { useDispatch } from "react-redux";

import { chooseSlot } from "../../../redux/admin/adminActions";
import { useDateCheck } from "../../../custom-hooks";
import { withBookingModal } from "../withBookingModal";

const AdminSlot = ({ id, hours, taken, lastBooking, setOpen, number }) => {
  let [unavailable, style] = useDateCheck(taken, lastBooking, false, id);
  const dispatch = useDispatch();
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
          <p>Available</p>{" "}
          <button
            onClick={() => {
              setOpen(true);
              dispatch(chooseSlot({ id, hours, number }));
            }}
          >
            BOOK
          </button>
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
