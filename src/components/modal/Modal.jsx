import { useDispatch, useSelector } from "react-redux";
import "./modal.css";
import { useLocation } from "react-router-dom";
import { removeFilm } from "../../store/film/action";
import { removePeople } from "../../store/people/action";
import { removePlanet } from "../../store/planet/action";
import { removeSpecies } from "../../store/species/action";
import { removeStarship } from "../../store/starship/action";
import { removeVehicle } from "../../store/vehicle/action";
import { setMF, setModal } from "../../store/modal/action";
import { setTranslate } from "../../store/sidebar/action";

const Modal = () => {
  const { show, id } = useSelector((state) => state?.dropSidebar);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = (id) => {
    if (location.pathname === "/films") {
      console.log(id, location.pathname);
      dispatch(removeFilm(id));
    }
    if (location.pathname === "/people") {
      dispatch(removePeople(id));
    }
    if (location.pathname === "/planets") {
      dispatch(removePlanet(id));
    }
    if (location.pathname === "/species") {
      dispatch(removeSpecies(id));
    }
    if (location.pathname === "/starships") {
      dispatch(removeStarship(id));
    }
    if (location.pathname === "/vehicles") {
      dispatch(removeVehicle(id));
    }
    dispatch(setMF());
    dispatch(setTranslate(false));
  };
  // const
  return (
    <div className="modal">
      <div>
        <img src="./ficon.png"></img>
        <h2>Caution!</h2>
        <p>
          Are you sure you want to Delete <span>$NAME</span>
        </p>
        <div>
          <button className="bt" onClick={() => dispatch(setModal(false))}>
            Cancel
          </button>
          <button className="bt bt22" onClick={() => handleClick(id)}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
