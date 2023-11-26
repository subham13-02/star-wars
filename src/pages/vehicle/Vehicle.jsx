import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal/Modal";
import Sidebar from "../../components/sidebar/Sidebar";
import SideCard from "../../components/sidecard/SideCard";
import { setTranslate } from "../../store/sidebar/action";
import { setSide } from "../../store/sidebarContent/action";
import { setDF } from "../../store/dropSideBar/action";
import DropDown from "../../components/dropdown/Dropdown";
import Card from "../../components/cards/Card";

const Vehicles = () => {
  const [grid, setGrid] = useState(false);

  const handleClick = () => {
    setGrid((prev) => !prev);
  };

  const dispath = useDispatch();
  const vehicles = useSelector((state) => state.vehicles);
  const translate = useSelector((state) => state.sidebar);
  const show = useSelector((state) => state.dropSidebar);
  const modal = useSelector((state) => state.modal);

  //   if (vehicles.length === 0) {
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
          <p>Vehicles</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src="./fourdot.png" className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src="./ham.png" className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className={translate ? "film-content fl" : " film-content"}>
            {vehicles.map((items, ind) => (
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
                  ind={ind}
                  title={items.name}
                  icon={"./vehicle.png"}
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
              <p className="date">Top Speed</p>
            </div>
            {vehicles.map((items, ind) => (
              <div
                key={ind}
                className={translate ? "list fl" : " list"}
                style={{
                  borderBottom:
                    ind === vehicles.length - 1 ? "1px solid transparent" : "",
                }}
                onClick={() => {
                  dispath(setTranslate(true));
                  dispath(setSide({ ind, ...items }));
                }}
              >
                <div className="name">
                  <img src="./vehicle.png" className="" />
                  {items.name}
                </div>
                <p className="direct">{items.model}</p>
                <div className="date">
                  {items.max_atmosphering_speed}
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

export default Vehicles;
