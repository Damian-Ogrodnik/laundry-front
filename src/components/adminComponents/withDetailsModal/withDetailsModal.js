import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { DateInfo } from "../DateInfo";

import { deleteSelectedSlot } from "../../../redux/admin/adminUtils";

export const withDetailsModal = WrappedComponent => ({ id, ...props }) => {
  const [isOpen, openDetails] = useState(false);
  const date = useSelector(store => store.board.date);
  const time = useSelector(store => store.admin.choosedSlot.hours);
  const dispatch = useDispatch();

  useEffect(() => Modal.setAppElement("#root"), []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        contentLabel="Details"
        className="modal details-modal"
        overlayClassName="overlay"
      >
        <DateInfo text={"Booking Details"} date={date} time={time} />
        <div className="modal__user">
          <p>User</p>
          <p>
            <span>Dogrodnik</span>
          </p>
        </div>
        <div className="modal__buttons">
          <button
            onClick={() => {
              dispatch(deleteSelectedSlot(date, id));
              openDetails(false);
            }}
          >
            DELETE
          </button>
          <button onClick={() => openDetails(false)}>CLOSE</button>
        </div>
      </Modal>
      <WrappedComponent {...props} openDetails={openDetails} />
    </div>
  );
};
