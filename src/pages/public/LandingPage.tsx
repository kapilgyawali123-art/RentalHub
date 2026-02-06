import React from "react";
import { GoHome } from "react-icons/go";
import heroImg from "/Images/Gemini_Generated_Image_9go8qv9go8qv9go8.png";

// Sample property data
const featuredProperties = [
  {
    id: 1,
    title: "Apartment",
    price: "Rs. 40000/mo",
    location: "Lazimpat, Kathmandu Nepal",
    image: "/Images/billy-albert-vjWlU6CaF58-unsplash.jpg",
  },
  {
    id: 2,
    title: "Modern Loft with Balcony",
    price: "Rs. 25000/mo",
    location: "Durbar Marg, Kathmandu Nepal",
    image:
      "/Images/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg",
  },
  {
    id: 3,
    title: "Spacious Family House",
    price: "Rs. 2000/mo",
    location: "Austin, TX",
    image: "/Images/building-dreamy-setting.jpg",
  },
];

function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header / Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center text-2xl font-bold text-indigo-600 space-x-2">
            <GoHome />
            <span>Rental Platform</span>
          </div>{" "}
          <nav className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#properties" className="hover:text-indigo-600 transition">
              Properties
            </a>
            <a href="#about" className="hover:text-indigo-600 transition">
              About Platform
            </a>
            <a
              href="/login"
              className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
            >
              Register
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-cover bg-center h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[90vh]"
        style={{ backgroundImage: `url` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-snug md:leading-tight">
            Find the Perfect Rental Property Anytime, Anywhere
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 max-w-full sm:max-w-xl md:max-w-2xl px-2">
            Browse verified rental properties, connect directly with hosts, and
            rent easily.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            <a
              href="#properties"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-center"
            >
              Browse Properties
            </a>
            <a
              href="/register"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition text-center"
            >
              Register as Guest
            </a>
            <a
              href="/register"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition text-center"
            >
              Register as Host
            </a>
          </div>
        </div>
      </section>

      {/* Platform Summary Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose Our Platform?
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Many users struggle to find trusted rental properties, and hosts
          struggle to reach genuine renters. Our platform connects guests and
          hosts directly with transparent pricing, real locations, and simple
          communication.
        </p>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
            <p className="text-gray-500">
              All properties are verified to ensure reliability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Location-Based</h3>
            <p className="text-gray-500">
              Search properties based on your preferred location.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
            <p className="text-gray-500">
              Connect directly with property hosts after login.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Simple & Secure</h3>
            <p className="text-gray-500">
              Easy-to-use platform with secure communication.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Property List Section */}
      <section id="properties" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Properties
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-indigo-600 font-bold mb-1">
                  {property.price}
                </p>
                <p className="text-gray-500 mb-3">{property.location}</p>
                <a
                  href="/login"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
