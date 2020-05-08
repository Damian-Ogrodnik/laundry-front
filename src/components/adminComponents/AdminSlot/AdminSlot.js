import React from "react";
import { compose } from "redux";
import { useDispatch } from "react-redux";

import { chooseSlot } from "../../../redux/admin/adminActions";
import { useDateCheck } from "../../../custom-hooks";
import { withBookingModal } from "../withBookingModal";
import { withDetailsModal } from "../withDetailsModal";

const AdminSlot = ({
  props: {
    hours,
    lastBooking,
    number,
    openBooking,
    openDetails,
    slotId,
    taken,
  },
}) => {
  let [unavailable, style] = useDateCheck(taken, lastBooking, false, slotId);
  const dispatch = useDispatch();

  return (
    <div className={`booking__slot booking__slot${style}`}>
      <h2>{hours}</h2>
      {unavailable ? (
        <p>Unavailable</p>
      ) : (
        <>
          <p>{slotId ? "Taken" : "Available"}</p>
          <button
            onClick={() => {
              slotId ? openDetails(true) : openBooking(true);
              dispatch(chooseSlot({ slotId, hours, number }));
            }}
          >
            {slotId ? "DETAILS" : "BOOK"}
          </button>
        </>
      )}
    </div>
  );
};

const withModals = compose(withBookingModal, withDetailsModal);
const adminSlotWithModals = withModals(AdminSlot);
export { adminSlotWithModals as AdminSlot };
