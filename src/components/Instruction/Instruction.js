import React, { useEffect, useState } from "react";

import { MdCreate } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { GiClothespin } from "react-icons/gi";

import { Tile } from "../Tile";

export const Instruction = () => {
  const [animate, setAnimate] = useState();
  useEffect(() => {
    let scroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 500) setAnimate("animate");
    });
    return () => window.removeEventListener("scroll", scroll);
  });

  return (
    <div className="homepage__instruction">
      <div className="homepage__instruction--header">
        <h2>
          <span>How it Works?</span>
        </h2>
      </div>
      <div className="homepage__tiles">
        <Tile icon={<MdCreate />} text={"Create Account"} animate={animate} />
        <Tile icon={<FiLogIn />} text={"Sign In"} animate={animate} />
        <Tile icon={<GoCalendar />} text={"Choose Date"} animate={animate} />
        <Tile icon={<FaCheckCircle />} text={"Book"} animate={animate} />
        <Tile
          icon={<GiClothespin />}
          text={"Do Laundry!"}
          arrow={false}
          animate={animate}
        />
      </div>
    </div>
  );
};
