import { SET_F, SET_MENU } from "./action";

// menuReducer.js
const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return !state;
    case SET_F:
      return false;
    default:
      return state;
  }
};

export default reducer;
