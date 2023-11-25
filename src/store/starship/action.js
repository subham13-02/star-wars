// starshipActions.js
export const SET_STARSHIP = "SET_STARSHIP";
export const REMOVE_STARSHIP = "REMOVE_STARSHIP";

export const setStarship = (payload) => ({
  type: SET_STARSHIP,
  payload,
});

export const removeStarship = (payload) => ({
  type: REMOVE_STARSHIP,
  payload,
});
