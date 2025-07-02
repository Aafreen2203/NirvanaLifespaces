import React from 'react';

// List of 10 amenities with image filenames (user will add these images to the amenities folder)
const amenities = [
  { img: '/src/assets/gym.png', name: 'Gymnasium' },
  { img: '/src/assets/spa.png', name: 'SPA' },
  { img: '/src/assets/pool-table.png', name: 'Pool Table' },
  { img: '/src/assets/table-tennis.png', name: 'Table Tennis' },
  { img: '/src/assets/chess.png', name: 'Chess' },
  { img: '/src/assets/carrom.png', name: 'Carrom' },
  { img: '/src/assets/kids-play.png', name: 'Kids Play Area' },
  { img: '/src/assets/jogging.png', name: 'Jogging Track' },
  { img: '/src/assets/court.png', name: 'Multi-Purpose Court' },
  { img: '/src/assets/pool.png', name: 'Main Pool' },
];

const Amenities = () => {
  return (
    <section className="py-16 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center text-black mb-14">Amenities</h2>
      <div className="p-6 flex justify-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-x-10 gap-y-12">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              style={{ width: '140px', height: '160px' }}
            >
              <img
                src={amenity.img}
                alt={amenity.name}
                className="object-contain mb-4"
                style={{ width: '64px', height: '64px' }}
              />
              <span className="text-base text-black text-center font-semibold group-hover:text-blue-600 transition-colors duration-300">
                {amenity.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
