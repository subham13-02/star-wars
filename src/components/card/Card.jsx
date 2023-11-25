import { setDrop } from "../../store/dropSideBar/action";
import "./Card.css";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const { title, ind, icon }=props;
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="image-container">
        <img src="./hero.png" className="dash-main-image" />
      </div>
      <div className="card-foot">
        <div>
          <img src={icon} className="film-img"></img>
          <p className="card-text">{title}</p>
        </div>

        <button
          className="card-btn"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setDrop(ind));
          }}
        >
          <img src="./threedot.png" />
        </button>
      </div>
    </div>
  );
};

export default Card;
