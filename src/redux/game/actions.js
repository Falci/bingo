import { GameActions } from "./actionsType";

export const addCard = payload => ({
  type: GameActions.ADD_CARD,
  payload
});

export const removeCardGame = payload => ({
  type: GameActions.REMOVE_CARD,
  payload
});

export const toggleNumber = payload => ({
  type: GameActions.TOGGLE_NUMBER,
  payload
});

export const resetNumbers = () => ({
  type: GameActions.RESET_NUMBER
});

export const removeAllCards = () => ({
  type: GameActions.REMOVE_ALL_CARDS
});
