import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { withError } from "HOC/withError";
import { Slots } from "components/Slots";

import { bookSelectedSlot } from "redux/booking/bookingUtils";
import { bookingFailure } from "redux/booking/bookingActions";

import { Toast } from "components/Toast";

const Booking = () => {
  const { date, selectedSlot } = useSelector((state) => state.board);
  const { error } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const bookSlot = async () => {
    if (!selectedSlot)
      return dispatch(bookingFailure("You have to select slot before book..."));
    dispatch(bookSelectedSlot(date, selectedSlot));
  };

  return (
    <div className="booking">
      <Toast text={"Slot booked"} toastType="BOOK" />
      <Toast text={"Booking canceled"} toastType={"CANCEL"} />
      <Slots />
      <button className="booking__button" onClick={() => bookSlot()}>
        BOOK
      </button>
      <div className="booking__wrapper">
        {error && <div className="booking__error">{error}</div>}
      </div>
    </div>
  );
};

const bookignWithError = withError(Booking);
export { bookignWithError as Booking };
