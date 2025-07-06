import React, { useEffect, useState } from 'react';

const amenities = [
  { img: '/src/assets/gym.png', name: 'Gymnasium', description: 'State-of-the-art fitness center with modern equipment' },
  { img: '/src/assets/spa.png', name: 'SPA', description: 'Relaxing spa facilities for ultimate wellness' },
  { img: '/src/assets/pool-table.png', name: 'Pool Table', description: 'Professional pool table for entertainment' },
  { img: '/src/assets/table-tennis.png', name: 'Table Tennis', description: 'Indoor table tennis for active recreation' },
  { img: '/src/assets/chess.png', name: 'Chess', description: 'Strategic board games for mental stimulation' },
  { img: '/src/assets/carrom.png', name: 'Carrom', description: 'Traditional carrom board for family fun' },
  { img: '/src/assets/kids-play.png', name: 'Kids Play Area', description: 'Safe and engaging play zone for children' },
  { img: '/src/assets/jogging.png', name: 'Jogging Track', description: 'Dedicated jogging track for fitness enthusiasts' },
  { img: '/src/assets/court.png', name: 'Multi-Purpose Court', description: 'Versatile sports court for various activities' },
  { img: '/src/assets/pool.png', name: 'Main Pool', description: 'Luxurious swimming pool for relaxation' },
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
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#284139] mb-6">PREMIUM AMENITIES</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Experience luxury living with our world-class amenities designed to enhance your lifestyle. 
            From fitness to recreation, we provide everything you need for a comfortable and fulfilling life.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className={`relative h-64 rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 bg-white shadow-lg ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111A19] to-[#2a3a39] opacity-90"></div>
              
              {/* Icon */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={amenity.img}
                  alt={amenity.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 pt-16">
                <h3 className="text-lg font-bold text-[#F8D794] mb-2 tracking-wide">
                  {amenity.name}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {amenity.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-[#284139]/20 transition-all duration-300 ${hoveredIndex === idx ? 'bg-opacity-40' : 'bg-opacity-0'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
