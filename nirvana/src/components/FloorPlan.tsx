import React from 'react';

const FloorPlan = () => {
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
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center">
            <img
              src="/src/assets/f-2.jpg"
              alt="3D Floor Layout 1"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center">
            <img
              src="/src/assets/f-3.jpg"
              alt="3D Floor Layout 2"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center">
            <img
              src="/src/assets/f-4.jpg"
              alt="3D Floor Layout 3"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
