import React from "react";
import { connect } from "react-redux";
import MiniCard from "./MiniCard";
import MiniCardAdd from "./MiniCardAdd";

import "./ListCards.scss";

export const ListCards = ({ cards, chosen }) => (
  <div className="ListCards">
    <div className="mini-wrapper">
      {cards.map((card, index) => (
        <MiniCard {...card} chosen={chosen} key={card.id} />
      ))}
      <MiniCardAdd key="__add" />
    </div>
  </div>
);

const mapStateToProps = store => ({
  cards: store.game.cards,
  chosen: store.game.chosen
});

export default connect(mapStateToProps)(ListCards);
