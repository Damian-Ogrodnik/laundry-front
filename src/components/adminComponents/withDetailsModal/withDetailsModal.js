import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

export const withDetailsModal = WrappedComponent => ({ ...props }) => {
  const [available, setAvailability] = useState(false);
  const date = useSelector(store => store.board.date);
  const time = useSelector(store => store.admin.choosedSlot.hours);

  useEffect(() => Modal.setAppElement("#root"), []);

  return (
    <div>
      <Modal
        isOpen={available}
        contentLabel="Details"
        className="modal details-modal"
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
      </Modal>
      <WrappedComponent {...props} setAvailability={setAvailability} />
    </div>
  );
};
