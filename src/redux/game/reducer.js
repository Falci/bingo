import { GameActions } from "./actionsType";

const addCard = (state, payload) => ({
  ...state,
  cards: state.cards.concat({
    ...payload,
    id: payload.id.replace("/", "-")
  })
});

const removeCard = (state, payload) => ({
  ...state,
  cards: state.cards.filter(card => card.id !== payload.id)
});

const resetNumbers = state => ({
  ...state,
  chosen: []
});

const removeAllCards = state => ({
  ...state,
  cards: []
});

const toggleNumber = (state, payload) => {
  let chosen;
  if (state.chosen.indexOf(payload) > -1) {
    chosen = state.chosen.filter(n => n !== payload);
  } else {
    chosen = state.chosen.concat(payload);
  }

  return { ...state, chosen };
};

const initialState = {
  chosen: [],
  cards: []
};
export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GameActions.ADD_CARD:
      return addCard(state, action.payload);
    case GameActions.REMOVE_CARD:
      return removeCard(state, action.payload);
    case GameActions.TOGGLE_NUMBER:
      return toggleNumber(state, action.payload);
    case GameActions.RESET_NUMBER:
      return resetNumbers(state);
    case GameActions.REMOVE_ALL_CARDS:
      return removeAllCards(state);
    default:
      return state;
  }
};
