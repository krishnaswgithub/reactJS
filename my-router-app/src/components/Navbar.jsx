import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
};

export const Navbar = () => {
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="products">
        Search Flights
      </NavLink>
    </nav>
  );
};
