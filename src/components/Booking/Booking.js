import React from "react";

import { Error } from "./Error";
import { withError } from "HOC/withError";
import { Slots } from "./Slots";
import { Toast } from "components/Toast";
import { BookButton } from "./BookButton";

const Booking = () => (
  <div className="booking">
    <Slots />
    <BookButton />
    <Error />
    <Toast text={"Slot booked"} toastType="BOOK" />
    <Toast text={"Booking canceled"} toastType={"CANCEL"} />
  </div>
);

const bookingWithError = withError(Booking);
export { bookingWithError as Booking };
