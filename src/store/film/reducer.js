import { REMOVE_FILM, SET_FILM } from "./action";

// filmReducer.js
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM:
      return action.payload;
    case REMOVE_FILM:
      return state.filter((item, ind) => ind !== action.payload);
    default:
      return state;
  }
};

export default reducer;
