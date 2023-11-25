import { SET_FALSE, SET_TRANSLATE } from "./action";

// sidebarReducer.js
const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSLATE:
      return action.payload;
    case SET_FALSE:
      return false;
    default:
      return state;
  }
};

export default reducer;
