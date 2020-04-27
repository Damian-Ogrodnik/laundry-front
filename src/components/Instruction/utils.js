import React from "react";
import { MdCreate } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { GiClothespin } from "react-icons/gi";

export const tiles = [
  [<MdCreate />, "Create Account", true],
  [<FiLogIn />, "Sign In", true],
  [<GoCalendar />, "Choose Date", true],
  [<FaCheckCircle />, "Book", true],
  [<GiClothespin />, "Do Laundry!", false],
];
