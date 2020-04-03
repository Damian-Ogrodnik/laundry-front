import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { nicknameSchema } from "../../../common/validation";
import { bookSelectedSlot } from "../../../redux/admin/adminUtils";
import { DateInfo } from "../DateInfo";

const values = {
  Nickname: ""
};

export const withBookingModal = WrappedComponent => ({ ...props }) => {
  const [isOpen, openBooking] = useState(false);
  const date = useSelector(store => store.board.date);
  const time = useSelector(store => store.admin.choosedSlot.hours);
  const number = useSelector(store => store.admin.choosedSlot.number);
  const dispatch = useDispatch();

  useEffect(() => Modal.setAppElement("#root"), []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        contentLabel="Booking"
        className="modal modal"
        overlayClassName="overlay"
      >
        <DateInfo text={"Book Slot"} time={time} date={date} />
        <Formik
          initialValues={values}
          validationSchema={nicknameSchema}
          onSubmit={({ Nickname }) => {
            console.log(Nickname);
            dispatch(bookSelectedSlot(Nickname, date, number, time));
            openBooking(false);
          }}
        >
          <Form>
            <div key={"Nickname"} className="modal__input">
              <label htmlFor={"Nickname"}>User Nickname</label>
              <Field name={"Nickname"} type="text" />
              <ErrorMessage name={"Nickname"}>
                {msg => <div className="form__error modal__error">{msg}</div>}
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
      <WrappedComponent {...props} openBooking={openBooking} />
    </div>
  );
};
