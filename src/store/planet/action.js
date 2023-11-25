// planetActions.js
export const SET_PLANETS = "SET_PLANETS";
export const REMOVE_PLANET = "REMOVE_PLANET";

export const setPlanets = (payload) => ({
  type: SET_PLANETS,
  payload,
});

export const removePlanet = (payload) => ({
  type: REMOVE_PLANET,
  payload,
});
