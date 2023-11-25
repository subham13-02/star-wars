import './homecard.css'

const HomeCard = () => {
  return (
    <div className="homeCard">
      <div className="dash-img">
        <img src="./hero.png" className="dash-main-image" />
      </div>
      
      <h2 className="star-head">Welcome to Star Wars Dashboard</h2>
      <p className="star-cont">
        Star Wars is an American epic space opera multimedia franchise created
        by George Lucas, which began with the eponymous 1977 film and quickly
        became a worldwide pop culture phenomenon.
      </p>
      
    </div>
  );
};

export default HomeCard;
