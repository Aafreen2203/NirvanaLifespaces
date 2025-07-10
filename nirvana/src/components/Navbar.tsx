import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { submitEnquiryForm } from "../services/formService";
import type { FormData } from "../services/formService";
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    residencyType: '',
    comments: ''
  });

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

  // Listen for contact popup events from footer
  useEffect(() => {
    const handleContactPopupEvent = () => {
      setContactPopupOpen(true);
    };

    window.addEventListener('openContactPopup', handleContactPopupEvent);
    
    return () => {
      window.removeEventListener('openContactPopup', handleContactPopupEvent);
    };
  }, []);

  const handleContactClick = () => {
    setContactPopupOpen(true);
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await submitEnquiryForm(formData);
      
      if (response.success) {
        setSubmitMessage('Thank you! Your enquiry has been submitted successfully.');
        setFormData({ name: '', email: '', phone: '', residencyType: '', comments: '' });
        setTimeout(() => {
          setContactPopupOpen(false);
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage(response.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        {/* Logo (left) */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Nirvana Gardens Logo" className="h-10 w-auto mr-3" style={{maxHeight:'40px'}} />
        </div>

        {/* Navbar Links (right) */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold ml-auto">
          <li className="hover:text-[#809076] transition-colors duration-300 cursor-pointer" onClick={() => document.getElementById('rooms')?.scrollIntoView({behavior:'smooth'})}>Project</li>
          <li className="hover:text-[#809076] transition-colors duration-300 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({behavior:'smooth'})}>Features</li>
          <li className="hover:text-[#809076] transition-colors duration-300 cursor-pointer" onClick={() => document.getElementById('floorplan')?.scrollIntoView({behavior:'smooth'})}>Floor Plan</li>
          <li className="hover:text-[#809076] transition-colors duration-300 cursor-pointer" onClick={handleContactClick}>Contact Us</li>
        </ul>

        {/* Hamburger/Cross Icon */}
        <button
          className="md:hidden text-3xl text-[#F8D794] focus:outline-none ml-auto"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111A19]/90 backdrop-blur-sm flex flex-col items-center justify-center text-[#F8D794] font-serif">
          <ul className="space-y-8 text-2xl font-semibold">
            <li className="hover:text-[#809076] cursor-pointer" onClick={() => { setMobileMenuOpen(false); document.getElementById('rooms')?.scrollIntoView({behavior:'smooth'}); }}>Project</li>
            <li className="hover:text-[#809076] cursor-pointer" onClick={() => { setMobileMenuOpen(false); document.getElementById('features')?.scrollIntoView({behavior:'smooth'}); }}>Features</li>
            <li className="hover:text-[#809076] cursor-pointer" onClick={() => { setMobileMenuOpen(false); document.getElementById('floorplan')?.scrollIntoView({behavior:'smooth'}); }}>Floor Plan</li>
            <li className="hover:text-[#809076] cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleContactClick(); }}>Contact Us</li>
          </ul>
        </div>
      )}

      {/* Contact Popup */}
      {contactPopupOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111A19] text-[#F8D794] rounded-lg shadow-2xl max-w-lg w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setContactPopupOpen(false)}
              className="absolute top-4 right-4 text-[#809076] hover:text-[#F8D794] transition-colors duration-300"
            >
              <FaTimes size={20} />
            </button>

            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Enquire Now</h2>
              <p className="text-[#809076] text-lg">You dream it, we'll walk you there.</p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Row 1: Name and Residency Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a3a39] border border-[#809076]/30 rounded-lg text-[#F8D794] placeholder-[#809076] focus:outline-none focus:border-[#F8D794] transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="residencyType" className="block text-sm font-medium mb-2">
                    Residency Type
                  </label>
                  <select
                    id="residencyType"
                    name="residencyType"
                    value={formData.residencyType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a3a39] border border-[#809076]/30 rounded-lg text-[#F8D794] focus:outline-none focus:border-[#F8D794] transition-colors duration-300"
                  >
                    <option value="" className="text-[#809076]">Select BHK type</option>
                    <option value="1 BHK" className="text-[#F8D794]">1 BHK</option>
                    <option value="2 BHK" className="text-[#F8D794]">2 BHK</option>
                    <option value="3 BHK" className="text-[#F8D794]">3 BHK</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Phone Number and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a3a39] border border-[#809076]/30 rounded-lg text-[#F8D794] placeholder-[#809076] focus:outline-none focus:border-[#F8D794] transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a3a39] border border-[#809076]/30 rounded-lg text-[#F8D794] placeholder-[#809076] focus:outline-none focus:border-[#F8D794] transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label htmlFor="comments" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2a3a39] border border-[#809076]/30 rounded-lg text-[#F8D794] placeholder-[#809076] focus:outline-none focus:border-[#F8D794] transition-colors duration-300 resize-none"
                  placeholder="Enter your message (optional)"
                />
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`text-center p-3 rounded-lg ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  isSubmitting 
                    ? 'bg-[#809076] text-[#111A19] cursor-not-allowed' 
                    : 'bg-[#F8D794] text-[#111A19] hover:bg-[#809076]'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
