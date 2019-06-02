import React from "react";
import className from "classnames";
import { FREE } from "../constants";

import "./MiniCard.scss";
import { withRouter } from "react-router";

export const MiniCard = ({ id, free, numbers, chosen, history }) => {
  const navigate = () => {
    history.push(`/view/${id}`);
  };

  const nums = [...numbers];
  if (free) {
    nums.splice(12, 0, FREE);
  }

  return (
    <div className="mini-card" onClick={navigate}>
      {nums.map((number, index) => {
        const css = className({
          number: true,
          selected: chosen.indexOf(number) > -1,
          free: index === 12 && free,
          [`n_${number}`]: true
        });

        return <div key={number} className={css} />;
      })}
    </div>
  );
};

export default withRouter(MiniCard);
