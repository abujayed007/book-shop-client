import { NavLink } from "react-router-dom";

const role = "admin";

export const navItems = [
  { key: "Home", label: <NavLink to="/">Home</NavLink> },
  { key: "About", label: <NavLink to="/about">About</NavLink> },
  { key: "Contact", label: <NavLink to="/contact">Contact</NavLink> },
  { key: "Sign Up", label: <NavLink to="/sign-up">Sign Up</NavLink> },
  { key: "Login", label: <NavLink to="/login">Login</NavLink> },
  {
    key: "Dashboard",
    label: <NavLink to={`/${role}/dashboard`}>Dashboard</NavLink>,
  },
];
