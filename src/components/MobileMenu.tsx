import React from 'react';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, setOpen }) => {
  return (
    <div
      className={`md:hidden fixed top-0 left-0 w-full bg-[#2d333a] z-40 transition-all duration-300 ease-in-out shadow-md ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}
      style={{ transitionProperty: 'max-height, opacity' }}
    >
      <div className="flex flex-col items-center py-6 space-y-6">
        <NavLinksWrapper setOpen={setOpen} />
        <SocialIcons />
      </div>
    </div>
  );
};

// Helper to close menu on link click
const NavLinksWrapper: React.FC<{ setOpen: (open: boolean) => void }> = ({ setOpen }) => {
  const links = [
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Packages', to: '/packages' },
  ];
  return (
    <nav>
      <ul className="flex flex-col space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.to}
              className="text-[#f7ca09] hover:text-white transition-colors duration-200 cursor-pointer text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu; 