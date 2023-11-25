import HomeCard from "../../components/homecard/HomeCard";
import Sidebar from "../../components/sidebar/Sidebar";
import './home.css'

const Home = () => {
  return (
    <div className="film">
      <Sidebar />
      <div className="dashboard">
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
