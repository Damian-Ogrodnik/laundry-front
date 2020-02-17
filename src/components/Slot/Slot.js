import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Slot = ({ hours, number }) => {
  const [taken, setTaken] = useState(false);
  const takenSlots = useSelector(state => state.board.bookings);

  useEffect(() => {
    if (takenSlots) {
      takenSlots.forEach(takenSlot => {
        if (takenSlot.number === number && takenSlot.taken) {
          setTaken(true);
        }
      });
    }
  }, [takenSlots, number]);

  return (
    <div>
      {number}.Slot {hours}
      {taken && <h1>Taken</h1>}
    </div>
  );
};

export default Slot;
