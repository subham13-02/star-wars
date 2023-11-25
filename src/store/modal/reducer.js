import { SET_MF, SET_MODAL } from "./action";

// modalReducer.js
const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      state = !state;
      return state;
    case SET_MF:
      state = false;
      return state;
    default:
      return state;
  }
};

export default reducer;
