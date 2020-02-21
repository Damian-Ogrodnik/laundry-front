import React from "react";

import { withError } from "../withError";
import { Slots } from "../Slots";

const Booking = () => {
  const bookSlot = () => {
    console.log("book");
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
