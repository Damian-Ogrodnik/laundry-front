import React, { useEffect, useState } from "react";

import { tiles } from "./utils";

import { Tile } from "components/Tile";

export const Instruction = () => {
  const [animate, setAnimate] = useState();
  useEffect(() => {
    let scroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 500) setAnimate("animate");
    });
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <div className="homepage__instruction">
      <div className="homepage__instruction--header">
        <h2>
          <span>How it Works?</span>
        </h2>
      </div>
      <div className="homepage__tiles">
        {tiles.map((props) => (
          <Tile key={props[1]} props={[animate, ...props]} />
        ))}
      </div>
    </div>
  );
};
