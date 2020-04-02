import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

export const withBookingModal = WrappedComponent => ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const date = useSelector(store => store.board.date);
  const time = useSelector(store => store.admin.choosedSlot.hours);

  useEffect(() => Modal.setAppElement("body"), []);

  return (
    <div>
      <Modal
        isOpen={open}
        contentLabel="Booking"
        className="modal booking-modal"
        overlayClassName="overlay"
      >
        <div className="booking-modal__basics">
          <div className="booking-modal__date">
            <p>
              <span>Date:</span> {date}
            </p>
          </div>
          <div className="booking-modal__time">
            <p>
              <span>Time:</span> {time}
            </p>
          </div>
        </div>
        <div className="booking-modal__input">
          <label htmlFor="name">User Name</label>
          <input type="text" />
        </div>

        <div className="booking-modal__buttons">
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            SUBMIT
          </button>
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            CANCEL
          </button>
        </div>
      </Modal>
      <WrappedComponent {...props} setOpen={setOpen} />
    </div>
  );
};
