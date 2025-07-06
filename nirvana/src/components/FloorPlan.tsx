import React, { useState } from 'react';
import { BedDouble, Bath, Car, Expand } from 'lucide-react';

const LAYOUTS = [
  {
    key: '1bhk',
    tab: '1 Bedroom',
    title: '1 Bedroom Layout',
    area: '650 sq. ft.',
    img: '/src/assets/f-2.jpg',
    desc: 'Perfect for singles or couples, this layout maximizes space and natural light for a cozy, modern lifestyle.',
    features: [
      { icon: <BedDouble size={20} />, label: '1' },
      { icon: <Bath size={20} />, label: '2' },
      { icon: <Car size={20} />, label: '1' },
    ],
  },
  {
    key: '2bhk',
    tab: '2 Bedroom',
    title: '2 Bedroom Layout',
    area: '1100 sq. ft.',
    img: '/src/assets/f-3.jpg',
    desc: 'Ideal for small families, offering a harmonious blend of comfort, privacy, and functional living spaces.',
    features: [
      { icon: <BedDouble size={20} />, label: '2' },
      { icon: <Bath size={20} />, label: '2' },
      { icon: <Car size={20} />, label: '2' },
    ],
  },
  {
    key: '3bhk',
    tab: '3 Bedroom',
    title: '3 Bedroom Layout',
    area: '1500 sq. ft.',
    img: '/src/assets/f-4.jpg',
    desc: 'Spacious and versatile, designed for growing families who value extra room and contemporary elegance.',
    features: [
      { icon: <BedDouble size={20} />, label: '3' },
      { icon: <Bath size={20} />, label: '3' },
      { icon: <Car size={20} />, label: '2' },
    ],
  },
  {
    key: '4bhk',
    tab: '4 Bedroom',
    title: '4 Bedroom Layout',
    area: '1800 sq. ft.',
    img: '/src/assets/f-5.jpg',
    desc: 'Ultimate luxury with expansive living areas and premium finishes.',
    features: [
      { icon: <BedDouble size={20} />, label: '4' },
      { icon: <Bath size={20} />, label: '4' },
      { icon: <Car size={20} />, label: '2' },
    ],
  },
];

export default function FloorPlan() {
  const [selected, setSelected] = useState('2bhk');
  const current = LAYOUTS.find(l => l.key === selected);

  return (
    <div className="min-h-screen bg-[#284139] flex flex-col items-center pt-20 pb-16">
      <h2 className="text-5xl md:text-6xl font-extrabold text-[#F8D794] mb-8 tracking-wide text-center">
        Podium Floor Plan
      </h2>
      <div className="w-full flex justify-center mb-16">
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 max-w-5xl w-full flex justify-center">
          <img
            src="/src/assets/NirvanaFloorPlan.jpg"
            alt="Main Floor Plan"
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>

      {/* Layout Options Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#F8D794] mb-8 text-center tracking-wide drop-shadow-md">
        Layout Options
      </h2>
      {/* Tabs */}
      <div className="flex justify-center mb-10 gap-2">
        {LAYOUTS.map(l => (
          <button
            key={l.key}
            className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-200 border border-[#3a4d3a] focus:outline-none ${
              selected === l.key
                ? 'bg-[#23272e] text-[#F8D794] shadow'
                : 'bg-transparent text-[#F8D794]/70 hover:bg-[#23272e]/60'
            }`}
            onClick={() => setSelected(l.key)}
          >
            {l.tab}
          </button>
        ))}
      </div>
      {/* Layout Card */}
      {current && (
        <div className="w-full flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl p-8 border border-[#e5e7eb] max-w-3xl w-full">
            <div className="flex items-center justify-center h-full">
              <div className="bg-[#f3f4f6] rounded-xl shadow-lg flex items-center justify-center w-[400px] h-[300px] md:w-[500px] md:h-[350px] max-w-full overflow-hidden">
                <img
                  src={current.img}
                  alt={current.title}
                  className="object-contain w-full h-full"
                  style={{ background: '#f3f4f6' }}
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">{current.title}</h3>
              <p className="text-xl font-medium text-green-700">{current.area}</p>
              <p className="text-gray-600">{current.desc}</p>
              <div className="flex items-center gap-6 pt-2">
                {current.features.map((f, i) => (
                  <span key={i} className="flex items-center gap-1 text-[#284139] bg-[#f6f7f4] px-3 py-1 rounded-full text-base font-medium shadow-sm">
                    {f.icon}
                    {f.label}
                  </span>
                ))}
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200 mt-4">
                Request Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



