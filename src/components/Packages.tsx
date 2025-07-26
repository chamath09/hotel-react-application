import React, { useState } from 'react';
import heroImage from '../assets/images/heroImage.jpg';
import { FaUtensils, FaSpa, FaCar } from 'react-icons/fa';

const Packages: React.FC = () => {
  const packages = [
    {
      id: 1,
      name: "Standard Room",
      price: "$150",
      perNight: "per night",
      image: heroImage,
      description: "Comfortable accommodation with essential amenities for a pleasant stay.",
      features: [
        "Queen-size bed",
        "Free Wi-Fi",
        "Private bathroom",
        "Daily housekeeping",
        "Room service",
        " Flat-screen TV"
      ],
    },
    {
      id: 2,
      name: "Deluxe Suite",
      price: "$300",
      perNight: "per night",
      image: heroImage,
      description: "Spacious suite with premium amenities and stunning city views.",
      features: [
        "King-size bed",
        "Free Wi-Fi",
        "Private balcony",
        "Mini bar",
        "Spa access",
        "Concierge service"
      ],
    },
    {
      id: 3,
      name: "Presidential Suite",
      price: "$800",
      perNight: "per night",
      image: heroImage,
      description: "Ultimate luxury experience with exclusive services and amenities.",
      features: [
        "Multiple bedrooms",
        "Private dining",
        "Butler service",
        "Spa & wellness",
        "Private pool access",
        "Limo service"
      ],
    }
  ];

  const [selected, setSelected] = useState<number | null>(null);

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
            our <span className="text-[#f7ca09]">packages</span>
          </h1>
          
        </div>
        
        
      </section>


      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-[#f7ca09]">Packages</span>
          </h2> */}
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            From comfortable standard rooms to luxurious presidential suites, 
            we offer accommodations to suit every preference and budget.
          </p>
        </div>

        {/* Responsive Grid of Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`border p-4 rounded-md shadow-sm bg-[#3c454c] cursor-pointer transition-all duration-200
                ${selected === idx ? 'border-[#f7ca09]' : 'border-gray-300'}
                hover:shadow-lg hover:border-[#f7ca09]/70`}
              onClick={() => setSelected(idx)}
            >
              <div className="relative h-48 overflow-hidden rounded-md mb-4">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#f7ca09] mb-2">{pkg.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold text-white">{pkg.price}</span>
                <span className="text-gray-400 ml-2">{pkg.perNight}</span>
              </div>
              <p className="text-gray-200 mb-4 leading-relaxed">{pkg.description}</p>
              <ul className="space-y-1 mb-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <span className="text-[#f7ca09] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#f7ca09] text-[#2d333a] font-bold py-2 px-4 rounded hover:bg-[#2d333a] hover:text-[#f7ca09] transition-colors duration-200 mt-2">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#f7ca09] text-center mb-8">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#3c454c] p-6 rounded-lg text-center">
              <div className="bg-[#f7ca09] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUtensils className="text-[#2d333a] text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-[#f7ca09] mb-2">Dining</h4>
              <p className="text-gray-200">Gourmet restaurants and room service available 24/7</p>
            </div>

            <div className="bg-[#3c454c] p-6 rounded-lg text-center">
              <div className="bg-[#f7ca09] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaSpa className="text-[#2d333a] text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-[#f7ca09] mb-2">Spa & Wellness</h4>
              <p className="text-gray-200">Relaxing spa treatments and fitness center access</p>
            </div>

            <div className="bg-[#3c454c] p-6 rounded-lg text-center">
              <div className="bg-[#f7ca09] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaCar className="text-[#2d333a] text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-[#f7ca09] mb-2">Transportation</h4>
              <p className="text-gray-200">Airport transfers and local transportation services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages; 