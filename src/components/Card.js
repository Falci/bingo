import React from "react";
import { Cell } from "./Cell";
import { FREE } from "../constants";

import "./Card.scss";

export const Card = ({ numbers, chosen, free }) => {
  const max = free ? 24 : 25;
  const nums = numbers.concat(Array(max - numbers.length).fill());

  if (free) {
    nums.splice(12, 0, FREE);
  }

  return (
    <div className="gamecard">
      {nums.map((num, index) => (
        <Cell key={index} value={num} selected={chosen.indexOf(num) > -1} />
      ))}
    </div>
  );
};
