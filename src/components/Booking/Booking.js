import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { withError } from "../withError";
import { Slots } from "../Slots";

import { bookSelectedSlot } from "../../redux/booking/bookingUtils";
import { bookingFailure } from "../../redux/booking/bookingActions";

const Booking = () => {
  const date = useSelector(state => state.board.date);
  const selectedSlot = useSelector(state => state.board.selectedSlot);
  const takenSlots = useSelector(state => state.board.takenSlots);
  const bookingError = useSelector(state => state.booking.error);
  const dispatch = useDispatch();

  const bookSlot = async () => {
    if (!selectedSlot)
      return dispatch(bookingFailure("You have to select slot before book..."));
    dispatch(bookSelectedSlot(date, selectedSlot));
  };

  return (
    <div className="booking">
      <Slots selectedSlot={selectedSlot} takenSlots={takenSlots} />
      <button className="booking__button" onClick={() => bookSlot()}>
        Book
      </button>
      <div className="booking__wrapper">
        {bookingError && <div className="booking__error">{bookingError}</div>}
      </div>
    </div>
  );
};

const bookignWithError = withError(Booking);
export { bookignWithError as Booking };
