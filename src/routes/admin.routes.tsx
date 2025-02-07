import AllUsers from "../pages/admin/AllUsers";
import ManageProducts from "../pages/admin/ManageProducts";
import MyOrders from "../pages/users/MyOrders";

export const adminPaths = [
  {
    path: "users",
    element: <AllUsers />,
  },
  {
    path: "manage-products",
    element: <ManageProducts />,
  },
  {
    path: "orders",
    element: <MyOrders />,
  },
];
