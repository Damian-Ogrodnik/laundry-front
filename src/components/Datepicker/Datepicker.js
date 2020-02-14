import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      minDate={new Date()}
      maxDate={addDays(new Date(), 7)}
      selected={startDate}
      onChange={date => setStartDate(date)}
    />
  );
};
