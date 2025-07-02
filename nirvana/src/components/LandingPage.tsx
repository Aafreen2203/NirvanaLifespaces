import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const houseImg =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

const LandingPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
    );
    gsap.fromTo(
      searchRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power3.out' }
    );
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 flex flex-col">
  {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 text-white">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="inline-block bg-white rounded p-1 mr-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                fill="#2563eb"
                d="M12 3l9 9-1.5 1.5L12 5.5 4.5 13.5 3 12l9-9z"
              />
              <path fill="#2563eb" d="M5 13v6h14v-6h2v8H3v-8h2z" />
            </svg>
          </span>
          Rent H&U
        </div>
        <ul className="flex gap-8 text-lg font-medium">
          <li><a href="#" className="hover:text-blue-300">Home</a></li>
          <li><a href="#" className="hover:text-blue-300">Contacts</a></li>
          <li><a href="#" className="hover:text-blue-300">Support</a></li>
          <li><a href="#" className="hover:text-blue-300">Location</a></li>
          <li><a href="#" className="hover:text-blue-300">About us</a></li>
        </ul>
        <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition">
          Try now
        </button>
      </nav>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="flex-1 flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-10 gap-10"
      >
        {/* Text */}
        <div className="flex-1 max-w-xl space-y-6">
          <h1
            ref={textRef}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            Finding Your New <br /> Home Is Simple
          </h1>
          <p className="text-lg text-blue-100 max-w-md">
            RentHomes.com is your go to destination for finding the perfect rental
            home to suit your needs. With thousands of property listings across the
            United States, and Europe.
          </p>
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition flex items-center gap-2">
            Search
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#fff"
                strokeWidth="2"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* House Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={houseImg}
            alt="Modern House"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>

      {/* Search Bar */}
      <div ref={searchRef} className="relative flex justify-center -mt-10 z-10">
        <div className="bg-white rounded-full shadow-lg flex flex-col md:flex-row items-center px-6 py-4 gap-4 md:gap-8 w-full max-w-4xl">
          <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center w-full md:w-auto">
            <span className="text-gray-500 text-sm md:mr-2">City Street</span>
            <input
              type="text"
              placeholder="123Street"
              className="bg-transparent outline-none font-semibold text-gray-800 w-32 md:w-24"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center w-full md:w-auto">
            <span className="text-gray-500 text-sm md:mr-2">Typology of rent</span>
            <input
              type="text"
              placeholder="Villa"
              className="bg-transparent outline-none font-semibold text-gray-800 w-24"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center w-full md:w-auto">
            <span className="text-gray-500 text-sm md:mr-2">Price</span>
            <input
              type="text"
              placeholder="€ 950,000.00"
              className="bg-transparent outline-none font-semibold text-gray-800 w-32 md:w-32"
            />
          </div>
          <button className="bg-blue-700 text-white px-8 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition flex items-center gap-2">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke="#fff" strokeWidth="2" />
              <path stroke="#fff" strokeWidth="2" d="M21 21l-4.35-4.35" />
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
