import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterestP, FaArrowRight, FaArrowDown, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Accommodation', to: '#' },
  { label: 'Dining', to: '#' },
  { label: 'Weddings', to: '#' },
  { label: 'Meetings & Conferences', to: '#' },
  { label: 'Events', to: '#' },
];
const aboutLinks = [
  { label: 'History', to: '#' },
  { label: 'Blog', to: '#' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Guidelines & Policies', to: '#' },
  { label: 'Sustainability Policy', to: '#' },
  { label: 'Contact Us', to: '/contact' },
];
const facilitiesLinks = [
  { label: 'Heritage Privileges', to: '#' },
  { label: 'Promotions', to: '#' },
  { label: 'Facilities', to: '#' },
  { label: 'Spa', to: '#' },
  { label: 'Services', to: '#' },
];
const externalLinks = [
  { label: 'GALLE FACE HOTEL SHOP', href: '#', icon: <FaArrowRight className="inline ml-1" /> },
  { label: 'EXPERIENCES & EXPEDITIONS', href: '#', icon: <FaArrowRight className="inline ml-1" /> },
];
const brochures = [
  { label: 'Galle Face Hotel Fact Sheet', href: '#' },
  { label: 'Wedding Packages Brochure', href: '#' },
  { label: 'MICE Brochure', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <div className="italic text-lg font-serif mb-4">Quick Links</div>
            <ul className="space-y-2 mt-4">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="uppercase tracking-wide font-light text-sm hover:text-lime-500 transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Facilities */}
          <div>
            <div className="italic text-lg font-serif mb-4">Facilities</div>
            <ul className="space-y-2 mt-4">
              {facilitiesLinks.map(link => (
                <li key={link.label}>
                  <a href={link.to} className="uppercase tracking-wide font-light text-sm hover:text-lime-500 transition-colors cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* About */}
          <div>
            <div className="italic text-lg font-serif mb-4">About</div>
            <ul className="space-y-2 mt-4">
              {aboutLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="uppercase tracking-wide font-light text-sm hover:text-lime-500 transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* External & Contact */}
          <div className="space-y-4">
            <div className="space-y-2">
              {externalLinks.map(link => (
                <a key={link.label} href={link.href} className="block font-light text-sm underline hover:text-lime-500 transition-colors cursor-pointer">
                  {link.label} {link.icon}
                </a>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <FaMapMarkerAlt className="mr-2 text-orange-500" />
                2 Galle Road, Colombo 3, Sri Lanka
              </div>
              <div className="flex items-center text-sm">
                <FaPhoneAlt className="mr-2 text-orange-500" />
                +94 11 754 1010
              </div>
              <div className="flex items-center text-sm">
                <FaEnvelope className="mr-2 text-orange-500" />
                <a href="mailto:information@gallefacehotel.com" className="hover:text-lime-500 underline">information@gallefacehotel.com</a>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              {brochures.map(brochure => (
                <a key={brochure.label} href={brochure.href} className="italic text-xs text-orange-700 hover:text-lime-500 underline flex items-center">
                  {brochure.label} <FaArrowDown className="ml-1 text-xs" />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Social Row */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-4">
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 hover:opacity-70 transition-all" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 hover:opacity-70 transition-all" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 hover:opacity-70 transition-all" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 hover:opacity-70 transition-all" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 hover:opacity-70 transition-all" aria-label="Pinterest"><FaPinterestP /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 hover:opacity-70 transition-all" aria-label="Twitter"><FaTwitter /></a>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-4 text-xs text-gray-500 gap-2">
          <div className="text-left w-full md:w-auto">© 2025 Galle Face Hotel - All rights reserved.</div>
          <div className="flex flex-row gap-4 justify-center w-full md:w-auto">
            <a href="#" className="hover:text-lime-500 transition-colors cursor-pointer">Legal Notice</a>
            <span>|</span>
            <a href="#" className="hover:text-lime-500 transition-colors cursor-pointer">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-lime-500 transition-colors cursor-pointer">Sitemap</a>
          </div>
          <div className="text-right w-full md:w-auto">Designed by <span className="font-semibold">1705 Studio</span> and developed by <span className="font-semibold">V</span>.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 