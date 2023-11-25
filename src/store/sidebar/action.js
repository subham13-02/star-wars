// sidebarActions.js
export const SET_TRANSLATE = "SET_TRANSLATE";
export const SET_FALSE = "SET_FALSE";

export const setTranslate = (payload) => ({
  type: SET_TRANSLATE,
  payload,
});

export const setFalse = () => ({
  type: SET_FALSE,
});
