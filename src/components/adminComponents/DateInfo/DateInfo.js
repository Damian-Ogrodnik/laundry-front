import React from "react";

export const DateInfo = ({ date, text, time }) => (
  <>
    <h2>{text}</h2>
    <div className="modal__basics">
      <div className="modal__date">
        <p>
          <span>Date:</span> {date}
        </p>
      </div>
      <div className="modal__time">
        <p>
          <span>Time:</span> {time}
        </p>
      </div>
    </div>
  </>
);
