import React, { useState } from 'react';
import heroImage from '../assets/images/heroImage.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Contact <span className="text-[#f7ca09]">Us</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f7ca09]">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-200">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#f7ca09] p-3 rounded-full">
                  <FaPhone className="text-[#2d333a] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#f7ca09]">Phone</h3>
                  <p className="text-gray-200">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#f7ca09] p-3 rounded-full">
                  <FaEnvelope className="text-[#2d333a] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#f7ca09]">Email</h3>
                  <p className="text-gray-200">info@luxuryhotel.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#f7ca09] p-3 rounded-full">
                  <FaMapMarkerAlt className="text-[#2d333a] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#f7ca09]">Address</h3>
                  <p className="text-gray-200">123 Luxury Avenue<br />Downtown, City 12345</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#f7ca09] p-3 rounded-full">
                  <FaClock className="text-[#2d333a] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#f7ca09]">Hours</h3>
                  <p className="text-gray-200">24/7 Front Desk Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#3c454c] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#f7ca09] mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2d333a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f7ca09] text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2d333a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f7ca09] text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2d333a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f7ca09] text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#2d333a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f7ca09] text-white resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#f7ca09] text-[#2d333a] font-bold py-3 px-6 rounded-lg hover:bg-[#3c454c] hover:text-white transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 