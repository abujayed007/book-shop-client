import { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { IoBookOutline } from "react-icons/io5";
import { navItems } from "../../../utils/navitems";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#6BA7A8",
        color: "white",
        height: "60px",
        position: "static",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          paddingLeft: "20px",
          paddingTop: "10px",
        }}
      >
        <IoBookOutline />
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
          }}
          className="desktop-menu"
        >
          {navItems.map((item) => (
            <Menu.Item
              style={{ fontSize: "16px", fontWeight: "600", color: "#F4F4F9" }}
              key={item.key}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="mobile-menu-button"
          style={{ marginRight: "20px" }}
        />
      )}

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={visible}
      >
        <Menu mode="vertical">
          {navItems.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;
