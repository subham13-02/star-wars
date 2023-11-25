import { SET_SIDE } from "./action";

// sidebarContentReducer.js
const initialState = {};

const sidebarContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDE:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default sidebarContentReducer;
