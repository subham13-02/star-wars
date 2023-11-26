import HomeCard from "../../components/homecard/HomeCard";
import Sidebar from "../../components/sidebar/Sidebar";
import './landingPage.css'

const LandingPage = () => {
  return (
    <div className="film">
      <Sidebar />
      <div className="dashboard">
        <HomeCard />
      </div>
    </div>
  );
};

export default LandingPage;
