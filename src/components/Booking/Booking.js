import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { withError } from "../withError";
import { Slots } from "../Slots";

import { bookSelectedSlot } from "../../redux/booking/bookingUtils";
import { fetchDate } from "../../redux/board/boardUtils";

const Booking = () => {
  const date = useSelector(state => state.board.date);
  const selectedSlot = useSelector(state => state.board.selectedSlot);
  const takenSlots = useSelector(state => state.board.takenSlots);
  const dispatch = useDispatch();

  const bookSlot = async () => {
    dispatch(bookSelectedSlot(date, selectedSlot));
  };

  return (
    <div className="booking">
      <Slots selectedSlot={selectedSlot} takenSlots={takenSlots} />
      <button className="booking__button" onClick={() => bookSlot()}>
        Book
      </button>
    </div>
  );
};

const bookignWithError = withError(Booking);
export { bookignWithError as Booking };
