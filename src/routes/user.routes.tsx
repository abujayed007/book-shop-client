import MyOrders from "../pages/users/MyOrders";
import MyProfile from "../pages/users/MyProfile";
import UpdatePassword from "../pages/users/UpdatePassword";

export const userPaths = [
  {
    path: "orders",
    element: <MyOrders />,
  },
  {
    path: "profile",
    element: <MyProfile />,
  },
  {
    path: "update-password",
    element: <UpdatePassword />,
  },
];
