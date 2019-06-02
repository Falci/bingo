import React from "react";
import { connect } from "react-redux";
import { toggleNumber } from "../redux/game/actions";
import { Cell } from "./Cell";

import "./Panel.scss";

export const Panel = ({ onSelect, chosen }) => {
  const nums = Array(75).fill();
  return (
    <div className="panel">
      {nums.map((num, index) => {
        const n = index + 1;
        return (
          <Cell
            value={n}
            onClick={v => onSelect(v)}
            key={index}
            selected={chosen.indexOf(n) > -1}
          />
        );
      })}
    </div>
  );
};

Panel.defaultProps = {
  chosen: [],
  onSelect: () => {}
};

const mapStateToProps = state => ({
  chosen: state.game.chosen
});

const mapDispatchToProps = {
  onSelect: toggleNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
