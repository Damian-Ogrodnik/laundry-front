import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { useDispatch, useSelector } from "react-redux";

import { fetchDate } from "../../redux/board/boardUtils";
import { resetBookings } from "../../redux/board/boardActions";
import { resetCurrentBooking } from "../../redux/booking/bookingActions";

import "react-datepicker/dist/react-datepicker.css";

export const Datepicker = ({ name }) => {
  const [startDate, setStartDate] = useState(new Date());
  const bookedSlot = useSelector(state => state.booking.bookedSlot);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetBookings());
    dispatch(resetCurrentBooking());
    dispatch(fetchDate(startDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, bookedSlot]);

  return (
    <div className={`${name}__datepicker`}>
      <DatePicker
        maxDate={addDays(new Date(), 7)}
        minDate={new Date()}
        onChange={date => setStartDate(date)}
        selected={startDate}
      />
    </div>
  );
};
