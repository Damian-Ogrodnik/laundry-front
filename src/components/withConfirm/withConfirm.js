import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const style = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadious: "5%",
    border: "0.2rem solid black",
    backgroundColor: "rgb(201, 193, 193)"
  }
};

export const withConfirm = WrappedComponent => ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => Modal.setAppElement("body"), []);

  return (
    <>
      <Modal isOpen={open} contentLabel="Confirmation" style={style}>
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
