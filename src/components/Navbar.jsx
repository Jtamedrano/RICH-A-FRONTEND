import { Link, NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

import NavLinks from "./NavLinks";
import useDimension from "../utils/useDimensions";
import { Menu } from "antd";

const { SubMenu, Item } = Menu;

const Navbar = ({ classes }) => {
  const rootClass = classes[0];

  const { x } = useDimension();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto",
        height: "100%",
      }}
    >
      <p className={`logo ${rootClass}__brand`}>
        <Link to="/">
          <strong>
            <span style={{ color: "#e43a49" }}>RICH</span>ARD ARNOLD
          </strong>
        </Link>
      </p>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["NavBarItem-1"]}
      >
        {x > 768 ? (
          NavLinks.map((link, i) => (
            <Item key={i}>
              <NavLink
                to={link.url}
                key={`NavBarItem-${i + 1}`}
                className={`${rootClass}__NavLink${
                  link.class ? ` ${link.class}` : ""
                }`}
              >
                {link.label}
              </NavLink>
            </Item>
          ))
        ) : (
          <SubMenu icon={<MenuOutlined />}>
            {NavLinks.map((link, i) => (
              <Item key={i}>
                <NavLink
                  to={link.url}
                  key={`NavBarItem-${i + 1}`}
                  className={`${rootClass}__NavLink${
                    link.class ? ` ${link.class}` : ""
                  }`}
                >
                  {link.label}
                </NavLink>
              </Item>
            ))}
          </SubMenu>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
