import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <Link
    to="/"
    className="text-3xl font-extrabold tracking-widest font-serif uppercase text-[#f7ca09] hover:text-white transition-colors duration-200 cursor-pointer"
  >
    HOTEL
  </Link>
);

export default Logo; 