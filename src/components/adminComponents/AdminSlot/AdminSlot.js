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
  number,
  openBooking,
  openDetails
}) => {
  let [unavailable, style] = useDateCheck(taken, lastBooking, false, id);
  const dispatch = useDispatch();

  return (
    <div className={`booking__slot booking__slot${style}`}>
      <h2>{hours}</h2>
      {unavailable ? (
        <p>Unavailable</p>
      ) : (
        <>
          <p>{id ? "Taken" : "Available"}</p>
          <button
            onClick={() => {
              id ? openDetails(true) : openBooking(true);
              dispatch(chooseSlot({ id, hours, number }));
            }}
          >
            {id ? "DETAILS" : "BOOK"}
          </button>
        </>
      )}
    </div>
  );
};

const withModals = compose(withBookingModal, withDetailsModal);
const adminSlotWithModals = withModals(AdminSlot);
export { adminSlotWithModals as AdminSlot };
