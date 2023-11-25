import { REMOVE_VEHICLE, SET_VEHICLE } from "./action";

// vehiclesReducer.js
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLE:
      return action.payload;
    case REMOVE_VEHICLE:
      return state.filter((item, ind) => ind !== action.payload);
    default:
      return state;
  }
};

export default reducer;
