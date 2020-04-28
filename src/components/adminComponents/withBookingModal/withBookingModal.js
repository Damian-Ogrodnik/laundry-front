import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { nicknameSchema } from "../../../common/validation";
import { bookSelectedSlot } from "../../../redux/admin/adminUtils";
import { DateInfo } from "../DateInfo";

const values = {
  Nickname: "",
};

export const withBookingModal = (WrappedComponent) => ({ ...props }) => {
  const [isOpen, openBooking] = useState(false);
  const date = useSelector((store) => store.board.date);
  const { hours, number } = useSelector((store) => store.admin.choosedSlot);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) Modal.setAppElement("#root");
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          contentLabel="Booking"
          className="modal modal"
          overlayClassName="overlay"
        >
          <DateInfo text={"Book Slot"} time={hours} date={date} />
          <Formik
            initialValues={values}
            validationSchema={nicknameSchema}
            onSubmit={({ Nickname }) => {
              dispatch(bookSelectedSlot(Nickname, date, number, hours));
              openBooking(false);
            }}
          >
            <Form>
              <div key={"Nickname"} className="modal__input">
                <label htmlFor={"Nickname"}>User Nickname</label>
                <Field name={"Nickname"} type="text" />
                <ErrorMessage name={"Nickname"}>
                  {(msg) => (
                    <div className="form__error modal__error">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="modal__buttons">
                <button className="form__button" type="submit">
                  BOOK
                </button>
                <button
                  className="form__button"
                  onClick={() => openBooking(false)}
                >
                  CLOSE
                </button>
              </div>
            </Form>
          </Formik>
        </Modal>
      )}
      <WrappedComponent {...props} openBooking={openBooking} />
    </>
  );
};
