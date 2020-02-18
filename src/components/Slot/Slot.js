import React from "react";

export const Slot = ({ hours, number, taken }) => {
  return (
    <div>
      {number}.Slot {hours}
      {taken && <h1>Taken</h1>}
    </div>
  );
};

export default Slot;
