import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "./Error";
import { withError } from "HOC/withError";
import { Slots } from "./Slots";
import { Toast } from "components/Toast";

import { bookSelectedSlot } from "redux/booking/bookingUtils";
import { bookingFailure } from "redux/booking/bookingActions";

const Booking = () => {
  const { date, selectedSlot } = useSelector((state) => state.board);
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
      <Error />
    </div>
  );
};

const bookingWithError = withError(Booking);
export { bookingWithError as Booking };
