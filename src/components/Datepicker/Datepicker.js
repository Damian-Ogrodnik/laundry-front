import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { useDispatch } from "react-redux";

import { fetchDate } from "../../redux/board/boardUtils";
import { resetBookings } from "../../redux/board/boardActions";

import "react-datepicker/dist/react-datepicker.css";

export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetBookings());
    dispatch(fetchDate(startDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  return (
    <div className="userboard__datepicker">
      <DatePicker
        minDate={new Date()}
        maxDate={addDays(new Date(), 7)}
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
    </div>
  );
};
