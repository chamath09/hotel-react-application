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
    <ul className="flex space-x-10">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.to}
            className="text-xl font-medium uppercase tracking-wide font-serif text-[#f7ca09] hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavLinks; 