import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  // Animate footer on mount
  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to navbar sections
  const scrollToNavbarSection = (sectionName: string) => {
    // For navbar sections, we'll scroll to the top and let the navbar handle the navigation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // You can add logic here to trigger navbar navigation if needed
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#111A19] text-[#F8D794] font-serif"
      style={{
        fontFamily: "'Merriweather', serif",
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl sm:text-3xl font-extrabold">
              <span className="text-[#F8D794]">Nirvana</span>
              <span className="text-[#809076]"> Gardens</span>
            </div>
            <p className="text-[#809076] text-sm leading-relaxed">
              Experience luxury living at its finest. Nirvana Gardens offers premium residential spaces 
              designed for modern comfort and elegant lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nirvanalifespaces" target="_blank" rel="noopener noreferrer" className="text-[#F8D794] hover:text-[#809076] transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/nirvanalifespaces/" target="_blank" rel="noopener noreferrer" className="text-[#F8D794] hover:text-[#809076] transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/nirvana-lifespaceskalyan/" target="_blank" rel="noopener noreferrer" className="text-[#F8D794] hover:text-[#809076] transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@officialnirvanalifespaces" target="_blank" rel="noopener noreferrer" className="text-[#F8D794] hover:text-[#809076] transition-colors duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#F8D794]">Quick Links</h3>
            <ul className="space-y-2 text-[#809076]">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-[#F8D794] transition-colors duration-300 text-left">Home</button></li>
              <li><button onClick={() => scrollToNavbarSection('about')} className="hover:text-[#F8D794] transition-colors duration-300 text-left">About Us</button></li>
              <li><button onClick={() => scrollToSection('rooms')} className="hover:text-[#F8D794] transition-colors duration-300 text-left">Rooms</button></li>
              <li><button onClick={() => scrollToSection('amenities')} className="hover:text-[#F8D794] transition-colors duration-300 text-left">Amenities</button></li>
              <li><button onClick={() => scrollToNavbarSection('contact')} className="hover:text-[#F8D794] transition-colors duration-300 text-left">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#F8D794]">Services</h3>
            <ul className="space-y-2 text-[#809076]">
              <li><a href="#" className="hover:text-[#F8D794] transition-colors duration-300">Property Management</a></li>
              <li><a href="#" className="hover:text-[#F8D794] transition-colors duration-300">Maintenance</a></li>
              <li><a href="#" className="hover:text-[#F8D794] transition-colors duration-300">Security</a></li>
              <li><a href="#" className="hover:text-[#F8D794] transition-colors duration-300">Concierge</a></li>
              <li><a href="#" className="hover:text-[#F8D794] transition-colors duration-300">24/7 Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#F8D794]">Contact Info</h3>
            <div className="space-y-3 text-[#809076]">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#F8D794] flex-shrink-0" size={16} />
                <span className="text-sm">Survey No. 33/1/F, Near Pawan Atharva, Next to Golden Wok Restaurant, Agarwal College Road, Kolivali, Khadakpada, Kalyan West, Maharashtra 421301</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#F8D794] flex-shrink-0" size={16} />
                <span className="text-sm">8424979797</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#F8D794] flex-shrink-0" size={16} />
                <span className="text-sm">sales@nirvanalifespaces.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#809076]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#809076] text-sm">
              © 2024 Nirvana Gardens. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-[#809076]">
              <a href="#" className="hover:text-[#F8D794] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#F8D794] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-[#F8D794] transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 