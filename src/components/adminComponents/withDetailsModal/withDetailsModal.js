import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { DateInfo } from "../DateInfo";

import {
  deleteSelectedSlot,
  getDetails,
} from "../../../redux/admin/adminUtils";

export const withDetailsModal = (WrappedComponent) => ({
  props: { ...props },
  openBooking,
}) => {
  const [isOpen, openDetails] = useState(false);
  const date = useSelector((store) => store.board.date);
  const {
    choosedSlot: { hours },
    details: { user },
  } = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      Modal.setAppElement("#root");
      dispatch(getDetails(props.slotId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          contentLabel="Details"
          className="modal details-modal"
          overlayClassName="overlay"
        >
          <DateInfo text={"Booking Details"} date={date} time={hours} />
          <div className="modal__user">
            <p>User</p>
            <p>
              <span>{user}</span>
            </p>
          </div>
          <div className="modal__buttons">
            <button
              onClick={() => {
                dispatch(deleteSelectedSlot(date, props.slotId));
                openDetails(false);
              }}
            >
              DELETE
            </button>
            <button onClick={() => openDetails(false)}>CLOSE</button>
          </div>
        </Modal>
      )}
      <WrappedComponent props={{ openBooking, openDetails, ...props }} />
    </>
  );
};
