import HomeCard from "../../components/Homecard/HomeCard";
import Sidebar from "../../components/Sidebar/Sidebar";
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
