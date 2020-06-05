import React from "react";
import { MdError } from "react-icons/md";

import { IconProvider } from "components/IconProvider";

export const Error = ({ errorMsg, name, icon }) => {
  return (
    <div className={`${name} error`}>
      {icon && <IconProvider icon={<MdError />} name={`${name} error__icon`} />}
      <p>{errorMsg}</p>
    </div>
  );
};
