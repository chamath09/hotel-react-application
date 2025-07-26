import React, { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';
import MobileMenu from './MobileMenu';
import { FiMenu } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex items-center justify-between backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
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
            className="text-[#f7ca09] hover:text-white transition-colors cursor-pointer text-3xl focus:outline-none"
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