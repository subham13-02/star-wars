// vehiclesActions.js
export const SET_VEHICLE = "SET_VEHICLE";
export const REMOVE_VEHICLE = "REMOVE_VEHICLE";

export const setVehicle = (payload) => ({
  type: SET_VEHICLE,
  payload,
});

export const removeVehicle = (payload) => ({
  type: REMOVE_VEHICLE,
  payload,
});