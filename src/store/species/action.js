// speciesActions.js
export const SET_SPECIES = "SET_SPECIES";
export const REMOVE_SPECIES = "REMOVE_SPECIES";

export const setSpecies = (payload) => ({
  type: SET_SPECIES,
  payload,
});

export const removeSpecies = (payload) => ({
  type: REMOVE_SPECIES,
  payload,
});
