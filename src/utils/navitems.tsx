import { NavLink, useNavigate } from "react-router-dom";

import { logOut, useCurrentToken } from "../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const NavItems = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = useAppSelector(useCurrentToken);

  // Ensure token is not null before decoding
  let user: { role: string } | null = null;
  if (token) {
    user = jwtDecode(token) as { role: string };
  }

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return [
    { key: "Home", label: <NavLink to="/">Home</NavLink> },
    { key: "About", label: <NavLink to="/about">About</NavLink> },
    { key: "Contact", label: <NavLink to="/contact">Contact</NavLink> },
    { key: "Books", label: <NavLink to="/products">Books</NavLink> },
    // Only show Dashboard link if token is available
    user
      ? {
          key: "Dashboard",
          label: <NavLink to={`/${user.role}/dashboard`}>Dashboard</NavLink>,
        }
      : null,
    !user
      ? { key: "Sign Up", label: <NavLink to="/sign-up">Sign Up</NavLink> }
      : null,
    !user
      ? { key: "Login", label: <NavLink to="/login">Login</NavLink> }
      : null,
    user
      ? {
          key: "Logout",
          label: (
            <NavLink to="/login" onClick={handleLogout}>
              Logout
            </NavLink>
          ),
        }
      : null,
  ].filter(Boolean); // Filters out the `null` value (if token is not available)
};

export default NavItems;
