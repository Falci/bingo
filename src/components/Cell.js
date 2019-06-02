import React from "react";
import className from "classnames";
import { FREE } from "../constants";

export const Cell = ({ value, selected, onClick }) => {
  const css = className({
    number: true,
    selected
  });

  const text = value === FREE ? <i className="fas fa-star" /> : value;

  return (
    <div className={css} key={value} onClick={() => onClick(value)}>
      {text}
    </div>
  );
};

Cell.defaultProps = {
  onClick: () => {}
};
