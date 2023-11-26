import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal/Modal";
import Sidebar from "../../components/sidebar/Sidebar";
import SideCard from "../../components/sidecard/SideCard";
import { setTranslate } from "../../store/sidebar/action";
import { setSide } from "../../store/sidebarContent/action";
import { setDF } from "../../store/dropSideBar/action";
import Card from "../../components/cards/Card";
import DropDown from "../../components/dropdown/Dropdown";

const People = () => {
  const [grid, setGrid] = useState(false);

  const handleClick = () => {
    setGrid((prev) => !prev);
  };

  const dispath = useDispatch();
  const people = useSelector((state) => state?.peoples);
  const species = useSelector((state) => state?.species);
  const translate = useSelector((state) => state?.sidebar);
  const show = useSelector((state) => state?.dropSidebar);
  const modal = useSelector((state) => state?.modal);
  //   if (people.length === 0 || species.length === 0) {
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
          <p>People</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src="./fourdot.png" className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src="./ham.png" className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className={translate ? "film-content fl" : " film-content"}>
            {people.map((items, ind) => (
              <div
                key={ind}
                onClick={() => {
                  dispath(setTranslate(true));
                  dispath(setSide({ ind, ...items }));
                  dispath(setDF());
                }}
                className="c"
              >
                <Card key={ind} ind={ind} title={items.name} icon={"./Users.png"} />
                {show.show && show.id === ind && <DropDown />}
              </div>
            ))}
          </div>
        ) : (
          <div className="list-view">
            <div className="list-head">
              <p className="name">Name</p>
              <p className="direct">BirthDate</p>
              <p className="date">Species</p>
            </div>
            {people.map((items, ind) => (
              <div
                key={ind}
                className={translate ? "list fl" : " list"}
                style={{
                  borderBottom:
                    ind === people.length - 1 ? "1px solid transparent" : "",
                }}
                onClick={() => {
                  dispath(setTranslate(true));
                  dispath(setSide({ ind, ...items }));
                }}
              >
                <div className="name">
                  <img src="./Users.png" className="" />
                  {items.name}
                </div>
                <p className="direct">{items.birth_year}</p>
                <div className="date">
                  {items.species && items.species[0]
                    ? species[items.species[0].split("/")[5] - 1].name
                    : "NA"}
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

export default People;
