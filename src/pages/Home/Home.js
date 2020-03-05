import React from "react";

import { Footer } from "../../components/Footer";
import { Front } from "../../components/Front";
import { Instruction } from "../../components/Instruction";

export const Home = () => {
  return (
    <div className="homepage">
      <Front />
      <Instruction />
      <Footer />
    </div>
  );
};
