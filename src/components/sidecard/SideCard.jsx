import "./sidecard.css";
import { useDispatch, useSelector } from "react-redux";
import { setFalse } from "../../store/sidebar/action";

const SideCard = () => {
  
  const data = useSelector((state) => state.sideContent);
  const dispatch = useDispatch();

  return (
    <div className="side-Card-main">
      <div className="side-left"></div>
      <div className="side-right">
        <div className="side-head">
          <p>Movie Details</p>
          <img
            src="./close.png"
            className="side-main-image"
            onClick={() => dispatch(setFalse())}
          />
        </div>
        <div className="side-down">
          <h3>Image</h3>
          <img src="./hero.png" className="img-st"></img>
          <h3>{data.title ? " Title" : "Name"}</h3>
          <p>{data.title ? data.title : data.name}</p>
          <h3>{data.opening_crawl && "Plot summary"}</h3>
          {data.opening_crawl && <p> {data.opening_crawl}</p>}
          {data.release_date && <h3>Release Date</h3>}
          {data.release_date && <p>{data.release_date}</p>}
          {data.director && <h3>Director</h3>}
          {data.director && <p>{data.director}</p>}
          {data.producer && <h3>Producers</h3>}
          {data.producer && <p>{data.producer}</p>}
          {data.height && <h3>Height</h3>}
          {data.height && <p>{data.height}</p>}
          {data.mass && <h3>Mass</h3>}
          {data.mass && <p>{data.mass}</p>}
          {data.hair_color && <h3>Hair Color</h3>}
          {data.hair_color && <p>{data.hair_color}</p>}
          {data.skin_color && <h3>Skin Color</h3>}
          {data.skin_color && <p>{data.skin_color}</p>}
          {data.eye_color && <h3>Eye Color</h3>}
          {data.eye_color && <p>{data.eye_color}</p>}
          {data.birth_year && <h3>Birth Year</h3>}
          {data.birth_year && <p>{data.birth_year}</p>}
          {data.gender && <h3>Gender</h3>}
          {data.gender && <p>{data.gender}</p>}
          
        </div>
        <div className="cl-down">
          <button className="cl" onClick={() => dispatch(setFalse())}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideCard;
