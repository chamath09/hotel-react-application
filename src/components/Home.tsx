import React from 'react';
import heroImage from '../assets/images/heroImage.jpg';

const Home: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hotel Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 z-10" />


      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
          Welcome to <span className="text-yellow-400">HOTEL</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-400 mb-3 sm:mb-4 drop-shadow-md">
          Experience Luxury & Comfort
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed drop-shadow-sm">
          Discover unforgettable stays, world-class amenities, and exceptional service in the heart of the city.
        </p>
      </div>
    </section>
  );
};

export default Home; 