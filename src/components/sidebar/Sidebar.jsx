import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilm } from "../../store/film/action";
import { setPeople } from "../../store/people/action";
import { setPlanets } from "../../store/planet/action";
import { setSpecies } from "../../store/species/action";
import { setStarship } from "../../store/starship/action";
import { setVehicle } from "../../store/vehicle/action";
import { setFalse, setTranslate } from "../../store/sidebar/action";
import { setMenu, setf } from "../../store/menu/action";
import { setSide } from "../../store/sidebarContent/action";

function Sidebar() {
  const [page, setPage] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("https://swapi.dev/api/films/", setFilm);
    fetchData("https://swapi.dev/api/people", setPeople);
    fetchData("https://swapi.dev/api/planets", setPlanets);
    fetchData("https://swapi.dev/api/species", setSpecies);
    fetchData("https://swapi.dev/api/starships", setStarship);
    fetchData("https://swapi.dev/api/vehicles", setVehicle);
  }, [dispatch]);

  const fetchData = async (url, sliceAction) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(sliceAction(data.results));
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  };

  const handleClick = (item) => {
    setPage(!page);
    dispatch(setFalse());
    dispatch(setMenu());
    dispatch(setf());
  };
  const menu = useSelector((state) => state.menu);
  const films = useSelector((state) => state.films);
  const people = useSelector((state) => state.peoples);
  const species = useSelector((state) => state.species);
  const planets = useSelector((state) => state.planets);
  const vehicles = useSelector((state) => state.vehicles);
  const starships = useSelector((state) => state.starship);
  const side = useSelector((state) => state.sideContent);
  return (
    <div className={menu ? `sideBar sidedis` : `sideBar sidenotdis`}>
      <Link
        to="/films"
        className="link"
        style={{
          background:
            location.pathname === "/films" ? "#CB1A80" : "transparent",
        }}
      >
        <button
          className="hover"
          onClick={() => handleClick("film")}
          style={{
            background:
              location.pathname === "/films" ? "#CB1A80" : "transparent",
          }}
        >
          <div className="sideBar-bar">
            <img src="./folder.png" />
            <p>Films</p>
          </div>
          <img
            src="./side.png"
            className="change"
            style={{
              transform:
                location.pathname === "/films" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/films" && page && (
        <div className="it">
          {films.map((item, ind) => (
            <div
              key={ind}
              className="pad"
              style={{
                backgroundColor: ind === side.ind ? "#F9FAFD33" : "transparent",
                border:
                  ind === side.ind
                    ? "1px solid black "
                    : "1px solid transparent",
              }}
              onClick={() => {
                dispatch(setSide({ ind, ...item }));
                dispatch(setTranslate(true));
              }}
            >
              <img src="./reel.png" />
              <p>{item.title}</p>
              <img src="./side.png" className="change ch" />
            </div>
          ))}
        </div>
      )}
      <Link
        to="/people"
        className="link"
        style={{
          background:
            location.pathname === "/people" ? "#CB1A80" : "transparent",
        }}
      >
        <button className="hover" onClick={() => handleClick("people")}>
          <div className="sideBar-bar">
            <img src="./folder.png" />
            <p>People</p>
          </div>
          <img
            src="./side.png"
            className="change"
            style={{
              transform:
                location.pathname === "/people" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/people" && page && (
        <div className="it">
          {people.map((item, ind) => (
            <div
              key={ind}
              className="pad"
              style={{
                backgroundColor: ind === side.ind ? "#F9FAFD33" : "transparent",
                border:
                  ind === side.ind
                    ? "1px solid black "
                    : "1px solid transparent",
              }}
              onClick={() => {
                dispatch(setSide({ ind, ...item }));
                dispatch(setTranslate(true));
              }}
            >
              <img src="./Users.png" />
              <p>{item.name}</p>
              <img src="./side.png" className="change ch" />
            </div>
          ))}
        </div>
      )}
      <Link
        to="/planets"
        className="link"
        style={{
          background:
            location.pathname === "/planets" ? "#CB1A80" : "transparent",
        }}
      >
        <button className="hover" onClick={() => handleClick("planet")}>
          <div className="sideBar-bar">
            <img src="./folder.png" />
            <p>Planets</p>
          </div>
          <img
            src="./side.png"
            className="change"
            style={{
              transform:
                location.pathname === "/planets" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/planets" && page && (
        <div className="it">
          {planets.map((item, ind) => (
            <div
              key={ind}
              className="pad"
              style={{
                backgroundColor: ind === side.ind ? "#F9FAFD33" : "transparent",
                border:
                  ind === side.ind
                    ? "1px solid black "
                    : "1px solid transparent",
              }}
              onClick={() => {
                dispatch(setSide({ ind, ...item }));
                dispatch(setTranslate(true));
              }}
            >
              <img src="./Planet.png" />
              <p>{item.name}</p>
              <img src="./side.png" className="change ch" />
            </div>
          ))}
        </div>
      )}
      <Link
        to="/species"
        className="link"
        style={{
          background:
            location.pathname === "/species" ? "#CB1A80" : "transparent",
        }}
      >
        <button
          className="hover"
          onClick={() => {
            handleClick("species");
          }}
        >
          <div className="sideBar-bar">
            <img src="./folder.png" />
            <p>Species</p>
          </div>
          <img
            src="./side.png"
            className="change"
            style={{
              transform:
                location.pathname === "/species" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/species" && page && (
        <div className="it">
          {species.map((item, ind) => (
            <div
              key={ind}
              className="pad"
              style={{
                backgroundColor: ind === side.ind ? "#F9FAFD33" : "transparent",
                border:
                  ind === side.ind
                    ? "1px solid black "
                    : "1px solid transparent",
              }}
              onClick={() => {
                dispatch(setSide({ ind, ...item }));
                dispatch(setTranslate(true));
              }}
            >
              <img src="./species.png" />
              <p>{item.name}</p>
              <img src="./side.png" className="change ch" />
            </div>
          ))}
        </div>
      )}
      <Link
        to="/starships"
        className="link"
        style={{
          background:
            location.pathname === "/starships" ? "#CB1A80" : "transparent",
        }}
      >
        <button
          className="hover"
          onClick={() => {
            handleClick("starships");
          }}
        >
          <div className="sideBar-bar">
            <img src="./folder.png" />
            <p>Starships</p>
          </div>
          <img
            src="./side.png"
            className="change"
            style={{
              transform:
                location.pathname === "/starships" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/starships" && page && (
        <div className="it">
          {starships.map((item, ind) => (
            <div
              key={ind}
              className="pad"
              style={{
                backgroundColor: ind === side.ind ? "#F9FAFD33" : "transparent",
                border:
                  ind === side.ind
                    ? "1px solid black "
                    : "1px solid transparent",
              }}
              onClick={() => {
                dispatch(setSide({ ind, ...item }));
                dispatch(setTranslate(true));
              }}
            >
              <img src="./starship.png" />
              <p>{item.name}</p>
              <img src="./side.png" className="change ch" />
            </div>
          ))}
        </div>
      )}
      <Link
        to="/vehicles"
        className="link"
        style={{
          background:
            location.pathname === "/vehicles" ? "#CB1A80" : "transparent",
        }}
      >
        <button
          className="hover"
          onClick={() => {
            handleClick("vehicles");
          }}
        >
          <div className="sideBar-bar">
            <img src="./folder.png" />
            <p>Vehicles</p>
          </div>
          <img
            src="./side.png"
            className="change"
            style={{
              transform:
                location.pathname === "/vehicles" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/vehicles" && page && (
        <div className="it">
          {vehicles.map((item, ind) => (
            <div
              key={ind}
              className="pad"
              style={{
                backgroundColor: ind === side.ind ? "#F9FAFD33" : "transparent",
                border:
                  ind === side.ind
                    ? "1px solid black "
                    : "1px solid transparent",
              }}
              onClick={() => {
                dispatch(setSide({ ind, ...item }));
                dispatch(setTranslate(true));
              }}
            >
              <img src="./vehicle.png" />
              <p>{item.name}</p>
              <img src="./side.png" className="change ch" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
