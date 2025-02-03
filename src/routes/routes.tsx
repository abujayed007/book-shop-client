import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserDashboard from "../pages/users/UserDashboard";
import { adminPaths } from "./admin.routes";
import { commonPaths } from "./common.routes";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { userPaths } from "./user.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: commonPaths,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    children: adminPaths,
  },
  {
    path: "/user/dashboard",
    element: <UserDashboard />,
    children: userPaths,
  },
]);

export default router;
