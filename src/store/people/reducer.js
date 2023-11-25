import { REMOVE_PEOPLE, SET_PEOPLE } from "./action";

// peopleReducer.js
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return action.payload;
    case REMOVE_PEOPLE:
      return state.filter((item, ind) => ind !== action.payload);
    default:
      return state;
  }
};

export default reducer;
