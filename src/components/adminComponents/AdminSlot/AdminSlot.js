import React from "react";
import { compose } from "redux";
import { useDispatch } from "react-redux";

import { chooseSlot } from "../../../redux/admin/adminActions";
import { useDateCheck } from "../../../custom-hooks";
import { withBookingModal } from "../withBookingModal";
import { withDetailsModal } from "../withDetailsModal";

const AdminSlot = ({
  id,
  hours,
  taken,
  lastBooking,
  setOpen,
  number,
  setAvailability
}) => {
  let [unavailable, style] = useDateCheck(taken, lastBooking, false, id);
  const dispatch = useDispatch();
  return (
    <div className={`booking__slot booking__slot${style}`}>
      <h2>{hours}</h2>
      {id && !unavailable && (
        <>
          <p>Taken</p>{" "}
          <button
            onClick={() => {
              setAvailability(true);
            }}
          >
            DETAILS
          </button>
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

const withModals = compose(withBookingModal, withDetailsModal);

const adminSlotWithModals = withModals(AdminSlot);
export { adminSlotWithModals as AdminSlot };
