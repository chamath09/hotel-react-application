import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/heroImage.jpg';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const Home: React.FC = () => {
  // Gallery images for carousel
  const galleryImages = [
    { id: 1, src: heroImage, alt: "Hotel Lobby", title: "Elegant Lobby" },
    { id: 2, src: heroImage, alt: "Hotel Room", title: "Luxury Suite" },
    { id: 3, src: heroImage, alt: "Hotel Restaurant", title: "Fine Dining" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance gallery carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-[#2d333a] text-white">
      {/* Full-Screen Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury Hotel"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-[#2d333a]/80 z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to <span className="text-[#f7ca09]">HOTEL</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#f7ca09] mb-4 drop-shadow-md">
            Experience Luxury & Comfort
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Discover unforgettable stays, world-class amenities, and exceptional service 
            in the heart of the city.
          </p>
          <Link
            to="/packages"
            className="inline-flex items-center bg-[#f7ca09] text-[#2d333a] font-bold py-4 px-8 rounded-lg hover:bg-[#3c454c] hover:text-white transition-colors duration-200 text-lg"
          >
            Book Your Stay
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 px-4 bg-[#3c454c]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                About <span className="text-[#f7ca09]">Us</span>
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                Nestled in the heart of the city, our hotel offers an unparalleled experience 
                of luxury and comfort. With over 20 years of excellence in hospitality, we 
                pride ourselves on providing world-class service to our distinguished guests.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Our commitment to excellence extends beyond just accommodation. We offer 
                state-of-the-art facilities, gourmet dining experiences, and personalized 
                services that cater to your every need.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#f7ca09] hover:text-white transition-colors duration-200 font-semibold text-lg cursor-pointer"
              >
                Read More
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Hotel Exterior"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section className="py-16 md:py-24 px-4 bg-[#2d333a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#f7ca09]">Packages</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              From comfortable standard rooms to luxurious presidential suites, 
              we offer accommodations to suit every preference and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Standard Room", price: "$150", features: ["Queen-size bed", "Free Wi-Fi", "Private bathroom"] },
              { name: "Deluxe Suite", price: "$300", features: ["King-size bed", "Private balcony", "Spa access"] },
              { name: "Presidential Suite", price: "$800", features: ["Multiple bedrooms", "Butler service", "Private pool"] }
            ].map((pkg, index) => (
              <div key={index} className="bg-[#3c454c] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-300 p-4">
                <div className="h-48 overflow-hidden rounded-md mb-4">
                  <img
                    src={heroImage}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#f7ca09] mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-white mb-4">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-200 flex items-center">
                      <span className="text-[#f7ca09] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#f7ca09] text-[#2d333a] font-bold py-2 px-4 rounded hover:bg-[#3c454c] hover:text-white transition-colors duration-200">
                  Book Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/packages"
              className="inline-flex items-center bg-[#f7ca09] text-[#2d333a] font-bold py-3 px-8 rounded-lg hover:bg-[#3c454c] hover:text-white transition-colors duration-200"
            >
              See All Packages
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 md:py-24 px-4 bg-[#3c454c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#f7ca09]">Gallery</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Take a virtual tour of our stunning facilities and discover the perfect blend 
              of comfort, elegance, and world-class service.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-80 md:h-96 rounded-lg shadow-lg overflow-hidden">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-[#2d333a]/60 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {galleryImages[currentImageIndex].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#2d333a] bg-opacity-80 hover:bg-[#f7ca09] hover:text-[#2d333a] text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#2d333a] bg-opacity-80 hover:bg-[#f7ca09] hover:text-[#2d333a] text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
              aria-label="Next image"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                    index === currentImageIndex
                      ? 'bg-[#f7ca09]'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center text-[#f7ca09] hover:text-white transition-colors duration-200 font-semibold text-lg cursor-pointer"
            >
              View Full Gallery
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-16 md:py-24 px-4 bg-[#2d333a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Get in <span className="text-[#f7ca09]">Touch</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible. 
                Our team is here to help you plan your perfect stay.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f7ca09] p-2 rounded-full">
                    <FaArrowRight className="text-[#2d333a] text-sm" />
                  </div>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f7ca09] p-2 rounded-full">
                    <FaArrowRight className="text-[#2d333a] text-sm" />
                  </div>
                  <span className="text-gray-300">info@luxuryhotel.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f7ca09] p-2 rounded-full">
                    <FaArrowRight className="text-[#2d333a] text-sm" />
                  </div>
                  <span className="text-gray-300">123 Luxury Avenue, Downtown</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-[#f7ca09] text-[#2d333a] font-bold py-3 px-8 rounded-lg hover:bg-[#3c454c] hover:text-white transition-colors duration-200"
              >
                Contact Us
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Hotel Contact"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 