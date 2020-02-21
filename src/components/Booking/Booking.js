import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { withError } from "../withError";
import { Slots } from "../Slots";

import { bookSelectedSlot } from "../../redux/booking/bookingUtils";

const Booking = () => {
  const date = useSelector(state => state.board.date);
  const selectedSlot = useSelector(state => state.board.selectedSlot);
  const dispatch = useDispatch();

  const bookSlot = () => {
    dispatch(bookSelectedSlot(date, selectedSlot));
  };

  return (
    <div className="booking">
      <Slots />
      <button className="booking__button" onClick={() => bookSlot()}>
        Book
      </button>
    </div>
  );
};

const bookignWithError = withError(Booking);
export { bookignWithError as Booking };
