import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <Link
    to="/"
    className="text-2xl font-bold text-yellow-400 hover:text-white transition-colors duration-200 cursor-pointer tracking-widest"
  >
    HOTEL
  </Link>
);

export default Logo; 