import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Films from "./pages/films/Films";
import People from "./pages/people/People";
import Planet from "./pages/planet/Planet";
import Species from "./pages/species/Species";
import Starship from "./pages/starship/Starship";
import Vehicles from "./pages/vehicle/Vehicle";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/films" element={<Films />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/planets" element={<Planet />}></Route>
        <Route path="/species" element={<Species />}></Route>
        <Route path="/starships" element={<Starship />}></Route>
        <Route path="/vehicles" element={<Vehicles />}></Route>
      </Routes>
    </>
  );
}

export default App;
