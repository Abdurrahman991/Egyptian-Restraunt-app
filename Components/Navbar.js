import Logo from "../assets/masr.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { MdReorder } from "react-icons/md";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Leftside">
        <img src={Logo} alt="Logo"></img>
      </div>

      <div className="Righside">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button>
          <MdReorder />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
