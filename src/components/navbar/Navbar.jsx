import { setMenu } from "../../store/menu/action";
import { setFalse } from "../../store/sidebar/action";
import "./navbar.css";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMenu());
    dispatch(setFalse());
  };

  return (
    <nav className="navbar-head">
      <img src="./logo.png" alt="logo" className="logo" />
      <div onClick={() => handleClick()} className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
