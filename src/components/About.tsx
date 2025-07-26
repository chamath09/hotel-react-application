import React from 'react';
import heroImage from '../assets/images/heroImage.jpg';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2d333a] text-white">

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2d333a]/80 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-[#f7ca09]">Us</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-2 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <div className="rounded-lg shadow-lg overflow-hidden bg-[#3c454c]">
              <img
                src={heroImage}
                alt="Hotel Exterior"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2 space-y-6">
            {/* <h2 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="text-[#f7ca09]"></span>
            </h2> */}
            <p className="text-lg leading-relaxed text-gray-200">
              Nestled in the heart of the city, our hotel offers an unparalleled experience 
              of luxury and comfort. With over 20 years of excellence in hospitality, we 
              pride ourselves on providing world-class service to our distinguished guests.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Our commitment to excellence extends beyond just accommodation. We offer 
              state-of-the-art facilities, gourmet dining experiences, and personalized 
              services that cater to your every need.
            </p>
            
            {/* Features List */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#f7ca09]">What Sets Us Apart:</h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <span className="text-[#f7ca09] mr-2">•</span>
                  24/7 Concierge Service
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7ca09] mr-2">•</span>
                  Luxury Spa & Wellness Center
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7ca09] mr-2">•</span>
                  Fine Dining Restaurants
                </li>
                <li className="flex items-center">
                  <span className="text-[#f7ca09] mr-2">•</span>
                  Business & Conference Facilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 