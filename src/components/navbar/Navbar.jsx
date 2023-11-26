import { setMenu } from "../../store/menu/action";
import { setFalse } from "../../store/sidebar/action";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleClick = () => {
    dispatch(setMenu());
    dispatch(setFalse());
  };

  return (
    <nav className="navbar-head">
      <img src="./logo.png" alt="logo" className="logo" onClick={()=>(navigate("/"))}/>
      <div className="search" >
      <FaSearch />
        <input placeholder="Search" style={{color:"white",border:"0",backgroundColor:"transparent",outline:"0"}}/>
      </div>
      <div onClick={() => handleClick()} className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
