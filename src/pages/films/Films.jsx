import { useState } from "react";
import Modal from "../../components/modal/Modal";
import Sidebar from "../../components/sidebar/Sidebar";
import SideCard from "../../components/sidecard/SideCard";
import "./films.css";
import { useDispatch, useSelector } from "react-redux";
import { setTranslate } from "../../store/sidebar/action";
import { setSide } from "../../store/sidebarContent/action";
import { setDF } from "../../store/dropSideBar/action";
import Card from "../../components/card/Card";
import DropDown from "../../components/dropdown/Dropdown";
import { Shimmer } from "../../components/shimmer/Shimmer";

const Films = () => {
  const [grid, setGrid] = useState(true);

  const handleClick = () => {
    setGrid((prev) => !prev);
  };

  const dispath = useDispatch();
  const films = useSelector((state) => state.films);
  const translate = useSelector((state) => state.sidebar);
  const show = useSelector((state) => state.dropSidebar);
  const modal = useSelector((state) => state.modal);

    if (films.length === 0) {
      return (
        <>
          <Shimmer />
        </>
      );
    }
  

  return (
    <div className="film">
      {modal && (
        <div className="gg">
          <Modal />
        </div>
      )}
      <Sidebar />
      
      {translate && (
        <div
          className="side-main"
          style={{
            transform: translate ? "translateX(0%)" : "translateX(100%)",
          }}
        >
          <SideCard translate={translate} />
        </div>
      )}

      <div className="flim-body">
        <div className="flim-head">
          <p>Films</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src="./fourdot.png" className={!grid ? "vl" : ""} />
            {grid && <p className="text-film">Grid</p>}
            <img src="./ham.png" className={grid ? "vl" : ""} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className={translate ? "film-content fl" : " film-content"}>
            {films.map((items, ind) => (
              <div
                key={ind}
                onClick={() => {
                  dispath(setTranslate(true));
                  dispath(setSide({ ind, ...items }));
                  dispath(setDF());
                }}
                className="c"
              >
                <Card key={ind} ind={ind} title={items.title} icon={"./reel.png"} />
                {show.show && show.id === ind && <DropDown />}
              </div>
            ))}
          </div>
        ) : (
          <div className="list-view">
            <div className="list-head">
              <p className="name">Name</p>
              <p className="direct">Director</p>
              <p className="date">Release Date</p>
            </div>
            {films.map((items, ind) => (
              <div
                key={ind}
                className={translate ? "list fl" : " list"}
                style={{
                  borderBottom:
                    ind === films.length - 1 ? "1px solid transparent" : "",
                }}
                onClick={() => {
                  dispath(setTranslate(true));
                  dispath(setSide({ ind, ...items }));
                }}
              >
                <div className="name">
                  <img src="./reel.png" className="" />
                  {items.title}
                </div>
                <p className="direct">{items.director}</p>
                <div className="date">
                  {items.release_date}
                  <img src="./threedot.png"></img>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Films;
