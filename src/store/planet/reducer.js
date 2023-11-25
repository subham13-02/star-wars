import { REMOVE_PLANET, SET_PLANETS } from "./action";

// planetReducer.js
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return action.payload;
    case REMOVE_PLANET:
      return state.filter((item, ind) => ind !== action.payload);
    default:
      return state;
  }
};

export default reducer;
