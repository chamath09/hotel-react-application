import React, { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';
import MobileMenu from './MobileMenu';
import { FiMenu } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Logo />
        {/* Nav Links - Center */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavLinks />
        </div>
        {/* Social Icons - Right */}
        <div className="hidden md:flex items-center space-x-4">
          <SocialIcons />
        </div>
        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            className="text-yellow-400 hover:text-white transition-colors cursor-pointer text-2xl focus:outline-none"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <FiMenu />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </nav>
  );
};

export default Navbar; 