import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = ({ classes }) => {
  const rootClass = classes[0];

  return (
    <>
      <div className={`logo ${rootClass}__brand`}>Richard Arnold</div>
      <Menu theme="light" mode="horizontal">
        {NavLinks.map((link, i) => (
          <Menu.Item key={i}>
            <NavLink
              to={link.url}
              key={`NavBarItem-${i + 1}`}
              className={`${rootClass}__NavLink${
                link.class ? ` ${link.class}` : ''
              }`}
            >
              <li>{link.label}</li>
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default Navbar;
