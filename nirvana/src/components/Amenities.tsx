import React, { useEffect, useState } from 'react';
import carrom from "../assets/carrom.jpg"
import chess from "../assets/chess.jpg"
import court from "../assets/court.jpg"
import gym from "../assets/gym.png"
import jogtrack from "../assets/jogtrack.jpg"
import kidsplayarea from "../assets/kidsplayarea.jpg"
import poolTable from "../assets/poolTable.jpg"
import seating from "../assets/seating.jpg"
import spa from "../assets/spa.png"
import tt from "../assets/tt.jpg"

const amenities = [
  // { img: gym, name: 'Gymnasium', description: 'State-of-the-art fitness center with modern equipment' },
  // { img: spa, name: 'SPA', description: 'Relaxing spa facilities for ultimate wellness' },
  { img: poolTable, name: 'Pool Table', description: 'Professional pool table for entertainment' },
  { img: tt, name: 'Table Tennis', description: 'Indoor table tennis for active recreation' },
  { img: chess, name: 'Chess', description: 'Strategic board games for mental stimulation' },
  { img: carrom, name: 'Carrom', description: 'Traditional carrom board for family fun' },
  { img: kidsplayarea, name: 'Kids Play Area', description: 'Safe and engaging play zone for children' },
  { img: jogtrack, name: 'Jogging Track', description: 'Dedicated jogging track for fitness enthusiasts' },
  { img: court, name: 'Multi-Purpose Court', description: 'Versatile sports court for various activities' },
  { img: seating, name: 'Main Pool', description: 'Luxurious swimming pool for relaxation' },
];

const Amenities = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="min-h-[120vh] bg-[#F8D794]/30 py-16 px-8" style={{ fontFamily: "'Merriweather', serif" }}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#284139] mb-4 leading-tight mx-auto">PREMIUM AMENITIES</h1>
          <p className="text-lg md:text-xl text-[#284139]/80 mx-auto leading-relaxed text-center">
            Experience luxury living with our world-class amenities<br />
            designed to enhance your lifestyle.<br />
            From fitness to recreation, we provide everything you need for a comfortable and fulfilling life.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className={`relative h-64 rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={amenity.img}
                alt={amenity.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found"
                }}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-[#284139]/30 transition-all duration-300 ${hoveredIndex === idx ? 'bg-opacity-20' : 'bg-opacity-0'}`} />
              
              {/* Text Content */}
              <div className={`absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center transition-all duration-400 ${hoveredIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-2xl font-bold mb-2 tracking-wide">{amenity.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
