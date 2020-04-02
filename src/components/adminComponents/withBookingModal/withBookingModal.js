import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import Modal from "react-modal";

import { nicknameSchema } from "../../../common/validation";

const values = {
  Nickname: ""
};

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
        <Formik
          initialValues={values}
          validationSchema={nicknameSchema}
          onSubmit={({ Nickname }) => {
            setOpen(false);
          }}
        >
          <Form>
            <div key={"Nickname"} className="booking-modal__input">
              <label htmlFor={"Nickname"}>User Nickname</label>
              <Field name={"Nickname"} type="text" />
              <ErrorMessage name={"Nickname"}>
                {msg => (
                  <div className="form__error booking-modal__error">{msg}</div>
                )}
              </ErrorMessage>
            </div>
            <div className="booking-modal__buttons">
              <button className="form__button" type="submit">
                SUBMIT
              </button>
              <button className="form__button" onClick={() => setOpen(false)}>
                CANCEL
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
      <WrappedComponent {...props} setOpen={setOpen} />
    </div>
  );
};
