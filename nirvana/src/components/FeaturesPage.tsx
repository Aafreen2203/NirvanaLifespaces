import React from 'react';
import {
  FaTrash,
  FaFireExtinguisher,
  FaBuilding,
  FaArrowUp,
  FaVideo,
  FaPhoneAlt,
} from 'react-icons/fa';

const palette = {
  emerald: '#284139',
  wasabi: '#808976',
  khaki: '#F8D794',
  earth: '#B88930',
  noir: '#111A19',
  gold: '#F8D794',
};

const features = [
  { icon: <FaBuilding />, title: 'Earthquake-resistant RCC structure', color: palette.emerald },
  { icon: <FaFireExtinguisher />, title: 'Integrated fire protection systems', color: palette.wasabi },
  { icon: <FaTrash />, title: 'Garbage disposal system', color: palette.khaki },
  { icon: <FaArrowUp />, title: 'High-speed passenger & stretcher lifts', color: palette.earth },
];

const security = [
  { icon: <FaVideo />, title: 'Godrej video door phone', color: palette.noir },
  { icon: <FaPhoneAlt />, title: 'Intercom connection to clubhouse, security, parking, and other apartments', color: palette.khaki },
];

const FeaturesPage = () => {
  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(17,26,25,0.92), rgba(17,26,25,0.92)), url('/src/assets/green-wall.jpg')",
      }}
      id="features"
    >
      <div className="max-w-6xl mx-auto">
        {/* Headings Row */}
        <div className="flex flex-row justify-center items-center gap-12 mb-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-center text-[#F8D794] tracking-wide">
              Features
            </h2>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-center text-[#F8D794] tracking-wide">
              3-Tier Security Features
            </h3>
          </div>
        </div>
        {/* Cards Row */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-8 shadow-lg flex flex-col items-center text-center border border-[#284139] bg-[#1a1f1c]/80 hover:scale-105 transition-transform duration-300 min-h-[260px]"
                  style={{
                    boxShadow: `0 8px 32px 0 ${feature.color}33`,
                  }}
                >
                  <div
                    className="mb-4 p-6 rounded-full"
                    style={{
                      background: feature.color,
                      color: feature.color === palette.khaki ? '#111A19' : '#F8D794',
                      fontSize: '3rem',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <p className="text-lg font-semibold" style={{ color: '#F8D794' }}>
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8">
              {security.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-8 shadow-lg flex flex-col items-center text-center border border-[#284139] bg-[#1a1f1c]/80 hover:scale-105 transition-transform duration-300 min-h-[260px]"
                  style={{
                    boxShadow: `0 8px 32px 0 ${item.color}33`,
                  }}
                >
                  <div
                    className="mb-4 p-6 rounded-full"
                    style={{
                      background: item.color,
                      color: item.color === palette.khaki ? '#111A19' : '#F8D794',
                      fontSize: '2.5rem',
                    }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-lg font-semibold" style={{ color: '#F8D794' }}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
