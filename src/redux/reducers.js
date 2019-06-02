import { combineReducers } from "redux";
import { gameReducer } from "./game/reducer";

export const reducers = combineReducers({
  game: gameReducer
});
