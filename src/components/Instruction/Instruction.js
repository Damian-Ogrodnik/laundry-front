import React from "react";

import { MdCreate } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { GiClothespin } from "react-icons/gi";

import { Tile } from "../Tile";

export const Instruction = () => {
  return (
    <div className="homepage__instruction">
      <div className="homepage__instruction--header">
        <h2>
          <span>How it works?</span>
        </h2>
      </div>
      <div className="homepage__tiles">
        <Tile icon={<MdCreate />} text={"Create Account"} />
        <Tile icon={<FiLogIn />} text={"Sign In"} />
        <Tile icon={<GoCalendar />} text={"Choose Date"} />
        <Tile icon={<FaCheckCircle />} text={"Book"} />
        <Tile icon={<GiClothespin />} text={"Do Laundry!"} arrow={false} />
      </div>
    </div>
  );
};
