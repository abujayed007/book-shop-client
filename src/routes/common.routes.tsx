import About from "../pages/Public/About";
import AllProducts from "../pages/Public/AllProducts";
import Blog from "../pages/Public/Blog";
import Contact from "../pages/Public/Contact";
import HomePage from "../pages/Public/HomePage";
import Login from "../pages/Public/Login";
import SignUp from "../pages/Public/SignUp";

export const commonPaths = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "blogs",
    element: <Blog />,
  },
  {
    path: "all-products",
    element: <AllProducts />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];
