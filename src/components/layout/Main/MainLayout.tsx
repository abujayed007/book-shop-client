import { Outlet } from "react-router-dom";
import Footers from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footers />
    </div>
  );
};

export default MainLayout;
