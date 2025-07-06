import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import edu from "../assets/edu.jpg"
// import healthcare from "../assets/healthcare.jpg"
// import shopping from "../assets/shopping.jpg"

gsap.registerPlugin(ScrollTrigger);

const KalyanConnectivityShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('shopping');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(leftContentRef.current?.children || [],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out"
        }
      );

      // Map animation
      gsap.fromTo(mapRef.current,
        { opacity: 0, scale: 0.9, x: 50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3
        }
      );

      // Features animation
      gsap.fromTo(featuresRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5
        }
      );

      // Images animation
      gsap.fromTo(imagesRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.8
        }
      );

      // Facilities animation
      gsap.fromTo(facilitiesRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: facilitiesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const keyFeatures = [
    {
      icon: "🚗",
      title: "Strategic Road Networks",
      description: "Direct connectivity to Thane, Bhiwandi, and Navi Mumbai"
    },
    {
      icon: "🚊",
      title: "Railway Excellence",
      description: "Seamless access to Kalyan Railway Station"
    },
    {
      icon: "🏗️",
      title: "Future Infrastructure",
      description: "MTHL and Ring Road projects enhancing connectivity"
    }
  ];

  // const amenityImages = [
  //   { src: shopping, alt: "Shopping Centers", label: "Shopping" },
  //   { src: healthcare, alt: "Healthcare Facilities", label: "Healthcare" },
  //   { src: edu, alt: "Educational Institutions", label: "Education" }
  // ];

  const nearbyFacilities = {
    shopping: {
      icon: "🛍️",
      title: "Shopping Centers",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Big Bazaar", "Reliance Fresh", "D-Mart", "More Supermarket",
        "Spencer's", "Kalyan Shopping Complex", "City Center Mall",
        "Khadakpada Market"
      ]
    },
    healthcare: {
      icon: "🏥",
      title: "Healthcare",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Jupiter Hospital", "Criticare Hospital", "Kalyan Hospital",
        "Shree Hospital", "Apex Hospital", "Noble Hospital",
        "Primary Health Centers", "Specialty Clinics"
      ]
    },
    education: {
      icon: "🎓",
      title: "Educational Institutes",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "St. Xavier's High School", "Podar International School",
        "Ryan International", "Delhi Public School", "Kalyan University",
        "Engineering Colleges", "Management Institutes", "Coaching Centers"
      ]
    },
    entertainment: {
      icon: "🎬",
      title: "Entertainment",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "PVR Cinemas", "INOX Movies", "Carnival Cinemas",
        "Gaming Zones", "Bowling Alleys", "Adventure Parks",
        "Sports Complexes", "Recreation Centers"
      ]
    },
    banking: {
      icon: "🏦",
      title: "ATM/Banks",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "State Bank of India", "HDFC Bank", "ICICI Bank",
        "Axis Bank", "Bank of Maharashtra", "Union Bank",
        "ATM Networks", "Cooperative Banks"
      ]
    },
    hospitality: {
      icon: "🏨",
      title: "Hospitality",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Hotel Regency", "Business Hotels", "Budget Accommodations",
        "Guest Houses", "Service Apartments", "Banquet Halls",
        "Conference Centers", "Wedding Venues"
      ]
    },
    recreation: {
      icon: "⚽",
      title: "Recreation",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Sports Clubs", "Swimming Pools", "Fitness Centers",
        "Yoga Studios", "Parks & Gardens", "Jogging Tracks",
        "Playground Areas", "Community Centers"
      ]
    },
    wellness: {
      icon: "💆",
      title: "Salons/Spa",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Lakme Salon", "VLCC", "Naturals", "Jawed Habib",
        "Spa Centers", "Beauty Parlors", "Wellness Centers",
        "Massage Therapy"
      ]
    }
  };

  const categoryKeys = Object.keys(nearbyFacilities) as Array<keyof typeof nearbyFacilities>;

  return (
    <div className="min-h-screen bg-[#F8D794]/30" style={{ fontFamily: "'Merriweather', serif" }}>
      {/* Main Content Section */}
      <div ref={containerRef} className="flex">
        {/* Left Content Panel */}
        <div className="w-1/3 p-12 flex flex-col justify-center">
          <div ref={leftContentRef} className="max-w-lg">
            {/* Subtitle */}
            <div className="mb-4">
              <span className="text-md font-medium text-[#111A19] tracking-wider uppercase" style={{ fontFamily: "'Merriweather', serif" }}>
                THE CONNECTIVITY BEGINS
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-7xl font-light text-[#390517] mb-8 leading-tight">
              Kalyan's Prime
              <br />
              <span className="font-normal">Location</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-2xl leading-relaxed mb-8">
              Discover unparalleled convenience and connectivity in the heart of Kalyan. 
              Where modern infrastructure meets strategic location advantages.
            </p>

            {/* Key Feature Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h2 className="text-4xl font-medium text-[#390517]">NIRVANA GARDENS</h2>
              </div>
              <p className="text-gray-600 text-2xl leading-relaxed mb-6">
                Situated on Gandhare Road in Kalyan West, Nirvana Gardens offers seamless 
                connectivity to key business hubs through well-developed road and rail networks. 
                Experience proximity to upscale amenities including fine dining, entertainment, 
                shopping, healthcare, and reputed educational institutions.
              </p>

              {/* Features Grid */}
              <div ref={featuresRef} className="space-y-4 mb-8">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#A38560]/40 hover:shadow-sm transition-all duration-300">
                    <span className="text-4xl">{feature.icon}</span>
                    <div>
                      <h3 className="font-medium text-3xl text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-xl text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Amenity Images */}
              {/* <div ref={imagesRef} className="grid grid-cols-3 gap-8 mb-8">
                {amenityImages.map((image, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Right Map Panel */}
        <div className="w-2/3 relative flex items-center justify-center p-8">
          <div ref={mapRef} className="relative w-full h-full max-w-4xl max-h-[90vh]">
            {/* Map Image Only */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connectivity-hAlUyiS1o3nmgpweb9otbK5btBY4GO.png"
              alt="Kalyan Connectivity Map"
              className="w-full h-full object-contain max-w-full max-h-[200vh] -mt-40"
            />

            {/* Map Overlay with Location Markers */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Key Location Markers */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-6 bg-[#284139]/20 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Key Connections</h3>
              <div className="space-y-1 text-md text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>To Mumbai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>To Thane</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>To Navi Mumbai</span>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            <div className="absolute -top-40 -right-40 bg-[#284139]/20 rounded-lg shadow-lg p-4 border border-gray-100">
              <div className="text-lg text-gray-900 mb-1">UPCOMING</div>
              <div className="text-md font-medium text-gray-800">MTHL Project</div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Facilities Section */}
      <div ref={facilitiesRef} className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-6xl font-light text-[#390517] mb-4">
              Nearby <span className="font-normal">Facilities</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Everything you need is within reach. Explore the comprehensive amenities 
              and services available in your neighborhood.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categoryKeys.map((category) => {
              const facility = nearbyFacilities[category];
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 border-[#B86830] transition-all duration-300
                     ${isActive ? 'bg-[#B86830] text-[#F8D794] shadow-lg scale-105' : 'bg-white/30 text-[#B86830] hover:bg-[#284139] hover:text-[#F8D794] shadow-md hover:shadow-lg'}`}
                >
                  <span className="text-3xl">{facility.icon}</span>
                  <span className="font-medium text-xl">{facility.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display */}
          <div className="bg-white/50 rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${nearbyFacilities[activeCategory as keyof typeof nearbyFacilities].color} flex items-center justify-center text-2xl text-white mr-4`}>
                {nearbyFacilities[activeCategory as keyof typeof nearbyFacilities].icon}
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-[#390517]">
                  {nearbyFacilities[activeCategory as keyof typeof nearbyFacilities].title}
                </h3>
                <p className="text-gray-600 text-lg">Conveniently located near Nirvana Gardens</p>
              </div>
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nearbyFacilities[activeCategory as keyof typeof nearbyFacilities].facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50/40 to-white/50 p-4 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${nearbyFacilities[activeCategory as keyof typeof nearbyFacilities].color} group-hover:scale-125 transition-transform duration-300`}></div>
                    <span className="text-gray-800 text-lg font-medium group-hover:text-[#390517] transition-colors duration-300">
                      {facility}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-[#390517] to-[#5a0a26] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore All Amenities
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default KalyanConnectivityShowcase;