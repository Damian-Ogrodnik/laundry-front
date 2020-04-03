import React, { useState, useEffect } from "react";
import Modal from "react-modal";

export const withConfirm = WrappedComponent => ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => Modal.setAppElement("#root"), []);

  return (
    <>
      <Modal
        isOpen={open}
        contentLabel="Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Are you sure?</h2>
        <button
          onClick={() => {
            setOpen(false);
            setConfirm(true);
          }}
        >
          YES
        </button>
        <button
          onClick={() => {
            setOpen(false);
            setConfirm(false);
          }}
        >
          NO
        </button>
      </Modal>
      <WrappedComponent {...props} setOpen={setOpen} confirm={confirm} />
    </>
  );
};
