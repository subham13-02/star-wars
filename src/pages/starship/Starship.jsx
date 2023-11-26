import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import Sidebar from "../../components/Sidebar/Sidebar";
import SideCard from "../../components/Sidecard/SideCard";
import Card from "../../components/Card/Card";
import DropDown from "../../components/Dropdown/Dropdown";
import { setTranslate } from "../../store/sidebar/action";
import { setSide } from "../../store/sidebarContent/action";
import { setDF } from "../../store/dropSideBar/action";

const Starship = () => {
  const [grid, setGrid] = useState(false);

  const handleClick = () => {
    setGrid((prev) => !prev);
  };

  const dispath = useDispatch();

  const starships = useSelector((state) => state.starship);
  const translate = useSelector((state) => state.sidebar);
  const show = useSelector((state) => state.dropSidebar);
  const modal = useSelector((state) => state.modal);

  //   if (starships.length === 0) {
  //     return <Loader />;
  //   }

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
          <p>Starships</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src="./fourdot.png" className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src="./ham.png" className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className={translate ? "film-content fl" : " film-content"}>
            {starships.map((items, ind) => (
              <div
                key={ind}
                onClick={() => {
                  dispath(setTranslate(true));
                  dispath(setSide({ ind, ...items }));
                  dispath(setDF());
                }}
                className="c"
              >
                <Card
                  key={ind}
                  title={items.name}
                  ind={ind}
                  icon={"./starship.png"}
                />
                {show.show && show.id === ind && <DropDown />}
              </div>
            ))}
          </div>
        ) : (
          <div className="list-view">
            <div className="list-head">
              <p className="name">Name</p>
              <p className="direct">Model</p>
              <p className="date">HyperDrive Rating</p>
            </div>
            {starships.map((items, ind) => (
              <div
                key={ind}
                className={translate ? "list fl" : " list"}
                style={{
                  borderBottom:
                    ind === starships.length - 1 ? "1px solid transparent" : "",
                }}
                onClick={() => {
                  dispath(setTranslate(true));
                  dispath(setSide({ ind, ...items }));
                }}
              >
                <div className="name">
                  <img src="./starship.png" className="" />
                  {items.name}
                </div>
                <p className="direct">{items.model}</p>
                <div className="date">
                  {items.hyperdrive_rating}
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

export default Starship;
