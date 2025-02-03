import AllUsers from "../pages/admin/AllUsers";
import ManageProducts from "../pages/admin/ManageProducts";

export const adminPaths = [
  {
    path: "users",
    element: <AllUsers />,
  },
  {
    path: "manage-products",
    element: <ManageProducts />,
  },
];
