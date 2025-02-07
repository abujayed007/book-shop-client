import { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { IoBookOutline } from "react-icons/io5";
import NavItems from "../../../utils/navitems";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle the mobile drawer
  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  // Prepare the items for the Menu
  const menuItems = NavItems();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#6BA7A8",
        color: "white",
        height: "60px",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          paddingLeft: "20px",
          paddingTop: "10px",
        }}
      >
        <NavLink to="/" style={{ color: "white" }}>
          <IoBookOutline />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      {!isMobile && (
        <Menu
          mode="horizontal"
          theme="dark"
          style={{
            flex: 1,
            justifyContent: "center",
            display: "flex",
            background: "#6BA7A8",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          items={menuItems} // Use the `items` prop instead of `children`
        />
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          style={{ marginRight: "20px", color: "#F4F4F9" }}
        />
      )}

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={visible}
        destroyOnClose
      >
        <Menu mode="vertical" items={menuItems} />
      </Drawer>
    </nav>
  );
};

export default Navbar;
