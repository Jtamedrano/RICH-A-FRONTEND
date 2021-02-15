import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          {NavLinks.map((link) => (
            <Link to={link.url}>
              <ul>{link.label}</ul>
            </Link>
          ))}
        </ul>
      </div>
      <p>This page is paid for by the Richard Arnold Foundation</p>
      <p>Design By Jesse Medrano from JavaScript Lifestyle</p>
    </footer>
  );
};

export default Footer;
