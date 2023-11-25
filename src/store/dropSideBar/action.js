// dropActions.js
export const SET_DROP = "SET_DROP";
export const SET_DF = "SET_DF";

export const setDrop = (payload) => ({
  type: SET_DROP,
  payload: payload,
});

export const setDF = () => ({
  type: SET_DF,
});
