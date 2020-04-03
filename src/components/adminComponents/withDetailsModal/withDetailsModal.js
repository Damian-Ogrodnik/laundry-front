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
        <h2>Booking Details</h2>
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
        <div className="modal__user">
          <p>User</p>
          <p>
            <span>Dogrodnik</span>
          </p>
        </div>
        <div className="modal__buttons">
          <button>DELETE</button>
          <button onClick={() => setAvailability(false)}>CLOSE</button>
        </div>
      </Modal>
      <WrappedComponent {...props} setAvailability={setAvailability} />
    </div>
  );
};
