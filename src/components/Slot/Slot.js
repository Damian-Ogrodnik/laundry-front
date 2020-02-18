import React from "react";

export const Slot = ({ hours, number, taken }) => {
  return (
    <div className={`booking__slot${taken ? 1}`}>
      <h1>{number}</h1>
      <h2>{hours}</h2>
      {taken && <h1>Taken</h1>}
    </div>
  );
};

export default Slot;
