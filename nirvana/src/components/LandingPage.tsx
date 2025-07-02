import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import b5 from "../assets/b5.png";
import gsap from "gsap";

const App: React.FC = () => {
  const linesRef = useRef<HTMLDivElement>(null);
  const nirvanaRef = useRef<HTMLSpanElement>(null);
  const gardensRef = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    // GSAP staggered animation
    gsap.set([nirvanaRef.current, gardensRef.current, paraRef.current, buttonsRef.current], { y: 60, opacity: 0 });
    gsap.to([nirvanaRef.current, gardensRef.current], { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 });
    gsap.to(paraRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.8 });
    gsap.to(buttonsRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 1.1 });
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center relative font-serif"
      style={{ backgroundImage: `url(${b5})`, fontFamily: "'Merriweather', serif" }}
    >
      <div className="absolute inset-0 z-10" style={{background: "linear-gradient(90deg, #284139cc 0%, #28413966 60%, #28413933 100%)"}} />
      <Navbar />

      {/* Animated Lines - Above Nirvana */}
      <div ref={linesRef} className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute left-0" style={{ top: '24%' }}>
          <div className="w-40 sm:w-62 h-0.5 bg-gradient-to-r from-[#B86830] to-transparent animate-pulse" />
        </div>
      </div>

      <div className="relative z-20 flex flex-col justify-center items-start h-full px-4 sm:px-8 md:px-16 text-[#F8D794]">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold leading-tight">
          <span ref={nirvanaRef} className="text-[#F8D794] drop-shadow-lg block">Nirvana</span>
          <span ref={gardensRef} className="text-[#284139] drop-shadow-lg block">Gardens</span>
        </h1>
        <p ref={paraRef} className="max-w-xs sm:max-w-md md:max-w-xl mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-[#F8D794] drop-shadow-md">
          Where luxury meets tranquility. Experience premium living in the heart of the city with world-class amenities and breathtaking views.
        </p>
        <div ref={buttonsRef} className="mt-6 sm:mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 relative w-full max-w-xs sm:max-w-none">
          <button className="bg-[#B86830] hover:bg-[#284139] text-[#F8D794] px-6 sm:px-8 py-3 rounded shadow-lg transition text-lg sm:text-xl font-bold border-2 border-[#B86830] w-full sm:w-auto">
            Explore Properties
          </button>
          <div className="relative w-full sm:w-auto">
            {/* Animated Line - Above Schedule Visit Button */}
            <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-32 sm:w-44 h-0.5 bg-gradient-to-r from-[#F8D794] to-transparent animate-pulse" />
            <button className="border-2 border-[#F8D794] px-6 sm:px-8 py-3 text-[#F8D794] hover:bg-[#F8D794] hover:text-[#284139] rounded transition text-lg sm:text-xl font-bold bg-transparent w-full sm:w-auto">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
