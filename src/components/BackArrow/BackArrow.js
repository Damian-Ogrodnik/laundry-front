import React from "react";
import { useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { IconProvider } from "components/IconProvider";

export const BackArrow = () => {
  let history = useHistory();
  return (
    <div className="back-arrow" onClick={() => history.goBack()}>
      <IconProvider icon={<MdArrowBack />} />
    </div>
  );
};
