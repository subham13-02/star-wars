// peopleActions.js
export const SET_PEOPLE = "SET_PEOPLE";
export const REMOVE_PEOPLE = "REMOVE_PEOPLE";

export const setPeople = (payload) => ({
  type: SET_PEOPLE,
  payload,
});

export const removePeople = (payload) => ({
  type: REMOVE_PEOPLE,
  payload,
});
