import { Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import { NavLink } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

import NavLinks from './NavLinks';

const { SubMenu, Item } = Menu;

const Navbar = ({ classes }) => {
  const rootClass = classes[0];

  return (
    <>
      <p className={`logo ${rootClass}__brand`}>
        <strong>Richard Arnold</strong>
      </p>
      <Menu theme="light" mode="horizontal">
        <SubMenu icon={<MenuOutlined />}>
          {NavLinks.map((link, i) => (
            <Item key={i}>
              <NavLink
                to={link.url}
                key={`NavBarItem-${i + 1}`}
                className={`${rootClass}__NavLink${
                  link.class ? ` ${link.class}` : ''
                }`}
              >
                {link.label}
              </NavLink>
            </Item>
          ))}
        </SubMenu>
      </Menu>
    </>
  );
};

export default Navbar;
