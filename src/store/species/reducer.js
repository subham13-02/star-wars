import { REMOVE_SPECIES, SET_SPECIES } from "./action";

// speciesReducer.js
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPECIES:
      return action.payload;
    case REMOVE_SPECIES:
      return state.filter((item, ind) => ind !== action.payload);
    default:
      return state;
  }
};

export default reducer;;
