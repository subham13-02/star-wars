import { combineReducers } from "redux";
import menuReducer from "../store/menu/reducer"
import sidebarReducer from "../store/sidebar/reducer"
import filmReducer from "../store/film/reducer"
import peopleReducer from "../store/people/reducer"
import planetReducer from "../store/planet/reducer"
import speciesReducer from "../store/species/reducer"
import starshipReducer from "../store/starship/reducer"
import vehiclesReducer from "../store/vehicle/reducer"
import modalReducer from "../store/modal/reducer"
import dropReducer from "../store/dropSideBar/reducer";
import sidebarContentReducer from "../store/sidebarContent/reducer"

export default combineReducers({
  menu: menuReducer,
  sidebar: sidebarReducer,
  films: filmReducer,
  peoples: peopleReducer,
  planets: planetReducer,
  species: speciesReducer,
  starship: starshipReducer,
  vehicles: vehiclesReducer,
  modal: modalReducer,
  dropSidebar: dropReducer,
  sideContent: sidebarContentReducer
});
