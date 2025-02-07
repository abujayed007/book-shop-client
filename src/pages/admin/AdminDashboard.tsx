import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { Header } from "antd/es/layout/layout";

const { Content, Sider } = Layout;

const items = [
  {
    key: "Home",
    label: (
      <NavLink
        to="/"
        style={{ color: "white", fontWeight: "bolder", fontSize: "16px" }}
      >
        Home
      </NavLink>
    ),
  },
  {
    key: "user",
    label: (
      <NavLink
        to="/admin/dashboard/users"
        style={{ color: "white", fontWeight: "bolder", fontSize: "16px" }}
      >
        Manage Users
      </NavLink>
    ),
  },
  {
    key: "Manage Products",
    label: (
      <NavLink
        to="/admin/dashboard/manage-products"
        style={{ color: "white", fontWeight: "bolder", fontSize: "16px" }}
      >
        Manage products
      </NavLink>
    ),
  },
  {
    key: "Orders",
    label: (
      <NavLink
        to="/admin/dashboard/orders"
        style={{ color: "white", fontWeight: "bolder", fontSize: "16px" }}
      >
        Orders
      </NavLink>
    ),
  },
];

const AdminDashboard = () => {
  return (
    <Layout>
      <Sider
        style={{ backgroundColor: "#6BA7A8", color: "whitesmoke" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          style={{
            backgroundColor: "#6BA7A8",
            position: "sticky",
            top: "0",
            left: "0",
            height: "100vh",
            marginTop: "50px",
          }}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "#6BA7A8" }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
