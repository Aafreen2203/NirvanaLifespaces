import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Show/hide on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
            setShowNavbar(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setShowNavbar(false);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slide in on mount
  useEffect(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#111A19]/60 text-[#F8D794] flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 shadow-md font-serif transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          fontFamily: "'Merriweather', serif",
          willChange: "transform, opacity",
        }}
      >
        <div className="text-2xl sm:text-4xl font-extrabold">
          <span className="text-[#F8D794]">Nirvana</span>
          <span className="text-[#809076]"> Gardens</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          <li className="hover:text-[#809076] transition-colors duration-300 cursor-pointer">Home</li>
          <li className="hover:text-[#809076] transition-colors duration-300 cursor-pointer">About</li>
          <li className="hover:text-[#809076] transition-colors duration-300 cursor-pointer">Properties</li>
          <li className="hover:text-[#809076] transition-colors duration-300 cursor-pointer">Contact</li>
        </ul>

        {/* Hamburger/Cross Icon */}
        <button
          className="md:hidden text-3xl text-[#F8D794] focus:outline-none"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111A19]/90 backdrop-blur-sm flex flex-col items-center justify-center text-[#F8D794] font-serif">
          <ul className="space-y-8 text-2xl font-semibold">
            <li className="hover:text-[#809076] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Home</li>
            <li className="hover:text-[#809076] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>About</li>
            <li className="hover:text-[#809076] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Properties</li>
            <li className="hover:text-[#809076] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
