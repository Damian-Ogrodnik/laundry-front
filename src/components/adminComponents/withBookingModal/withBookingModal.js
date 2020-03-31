import React, { useState, useEffect } from "react";
import Modal from "react-modal";

export const withBookingModal = WrappedComponent => ({ ...props }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => Modal.setAppElement("body"), []);

  return (
    <div>
      <Modal
        isOpen={open}
        contentLabel="Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </button>
      </Modal>
      <WrappedComponent {...props} setOpen={setOpen} />
    </div>
  );
};
