import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const icons = [
  {
    icon: <FaFacebookF />,
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    icon: <FaTwitter />,
    href: 'https://twitter.com',
    label: 'Twitter',
  },
];

const SocialIcons: React.FC = () => (
  <div className="flex space-x-4">
    {icons.map(({ icon, href, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-yellow-400 hover:text-white transition-colors duration-200 cursor-pointer text-xl"
      >
        {icon}
      </a>
    ))}
  </div>
);

export default SocialIcons; 