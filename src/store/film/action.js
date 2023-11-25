// filmActions.js
export const SET_FILM = "SET_FILM";
export const REMOVE_FILM = "REMOVE_FILM";

export const setFilm = (payload) => ({
  type: SET_FILM,
  payload,
});

export const removeFilm = (payload) => ({
  type: REMOVE_FILM,
  payload,
});
