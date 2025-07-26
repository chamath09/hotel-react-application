import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Packages', to: '/packages' },
];

const NavLinks: React.FC = () => (
  <nav>
    <ul className="flex space-x-8">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.to}
            className="text-yellow-400 hover:text-white transition-colors duration-200 cursor-pointer text-lg font-medium"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavLinks; 