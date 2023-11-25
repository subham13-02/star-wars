// dropReducer.js
import { SET_DF, SET_DROP } from "./action";

const initialState = { show: false, id: -1 };

const dropReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DROP:
      return {
        ...state,
        show: action.payload === state.id ? !state.show : state.show,
        id: action.payload,
      };
    case SET_DF:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default dropReducer;
