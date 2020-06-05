import React from "react";
import { FaArrowRight } from "react-icons/fa";

import { IconProvider } from "components/IconProvider";

export const Tile = ({ props: [animate, icon, text, arrow] }) => {
  return (
    <>
      <div className={`homepage__tile ${animate}`}>
        <div className="homepage__tile__wrapper--top">
          <IconProvider icon={icon} name={"homepage__tile__icon"} />
        </div>
        <div className="homepage__tile__wrapper">
          <h3>{text}</h3>
        </div>
      </div>
      {arrow && (
        <IconProvider
          icon={<FaArrowRight />}
          name={`homepage__tile__arrow ${animate}`}
        />
      )}
    </>
  );
};
