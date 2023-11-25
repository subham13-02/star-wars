import { REMOVE_STARSHIP, SET_STARSHIP } from "./action";

// starshipReducer.js
const initialState = [];

const starshipReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STARSHIP:
      return action.payload;
    case REMOVE_STARSHIP:
      return state.filter((item, ind) => ind !== action.payload);
    default:
      return state;
  }
};

export default starshipReducer;
