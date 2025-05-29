import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ appName }) => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <h2>{appName}</h2>
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">Add Employee</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </header>
  );
};

export default Header;
