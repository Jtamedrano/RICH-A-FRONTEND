import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = ({ classes }) => {
  const rootClass = classes[0];

  return (
    <nav className={classes.join(' ')}>
      <h6 className={`${rootClass}__brand`}>Richard Arnold</h6>
      <nav>
        <ul>
          {NavLinks.map((link, i) => (
            <NavLink
              to={link.url}
              key={`NavBarItem-${i + 1}`}
              className={`${rootClass}__NavLink${
                link.class ? ` ${link.class}` : ''
              }`}
            >
              <li>{link.label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
