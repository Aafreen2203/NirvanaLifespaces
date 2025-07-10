"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const KalyanConnectivityShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)
  const facilitiesRef = useRef<HTMLDivElement>(null)
  const facilitiesHeaderRef = useRef<HTMLDivElement>(null)
  const facilitiesTabsRef = useRef<HTMLDivElement>(null)
  const facilitiesContentRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("shopping")

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation with scroll trigger
      gsap.fromTo(
        leftContentRef.current?.children || [],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Map animation with scroll trigger
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.9, x: 50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Features animation with scroll trigger
      gsap.fromTo(
        featuresRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Facilities section header animation
      gsap.fromTo(
        facilitiesHeaderRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: facilitiesHeaderRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Facilities tabs animation
      gsap.fromTo(
        facilitiesTabsRef.current?.children || [],
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: facilitiesTabsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Facilities content animation
      gsap.fromTo(
        facilitiesContentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: facilitiesContentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Facilities grid items animation
      gsap.fromTo(
        facilitiesContentRef.current?.querySelectorAll(".facility-item") || [],
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: facilitiesContentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Re-animate facilities content when category changes
  useEffect(() => {
    if (facilitiesContentRef.current) {
      gsap.fromTo(
        facilitiesContentRef.current.querySelectorAll(".facility-item"),
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        },
      )
    }
  }, [activeCategory])

  const keyFeatures = [
    {
      title: "Strategic Road Networks",
      description: "Direct connectivity to Thane, Bhiwandi, and Navi Mumbai",
    },
    {
      title: "Railway Excellence",
      description: "Seamless access to Kalyan Railway Station",
    },
    {
      title: "Future Infrastructure",
      description: "MTHL and Ring Road projects enhancing connectivity",
    },
  ]

  const nearbyFacilities = {
    shopping: {
      title: "Shopping Centers",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Big Bazaar",
        "Reliance Fresh",
        "D-Mart",
        "More Supermarket",
        "Spencer's",
        "Kalyan Shopping Complex",
        "City Center Mall",
        "Khadakpada Market",
      ],
    },
    healthcare: {
      title: "Healthcare",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Jupiter Hospital",
        "Criticare Hospital",
        "Kalyan Hospital",
        "Shree Hospital",
        "Apex Hospital",
        "Noble Hospital",
        "Primary Health Centers",
        "Specialty Clinics",
      ],
    },
    education: {
      title: "Educational Institutes",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "St. Xavier's High School",
        "Podar International School",
        "Ryan International",
        "Delhi Public School",
        "Kalyan University",
        "Engineering Colleges",
        "Management Institutes",
        "Coaching Centers",
      ],
    },
    entertainment: {
      title: "Entertainment",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "PVR Cinemas",
        "INOX Movies",
        "Carnival Cinemas",
        "Gaming Zones",
        "Bowling Alleys",
        "Adventure Parks",
        "Sports Complexes",
        "Recreation Centers",
      ],
    },
    banking: {
      title: "ATM/Banks",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "State Bank of India",
        "HDFC Bank",
        "ICICI Bank",
        "Axis Bank",
        "Bank of Maharashtra",
        "Union Bank",
        "ATM Networks",
        "Cooperative Banks",
      ],
    },
    hospitality: {
      title: "Hospitality",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Hotel Regency",
        "Business Hotels",
        "Budget Accommodations",
        "Guest Houses",
        "Service Apartments",
        "Banquet Halls",
        "Conference Centers",
        "Wedding Venues",
      ],
    },
    recreation: {
      title: "Recreation",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Sports Clubs",
        "Swimming Pools",
        "Fitness Centers",
        "Yoga Studios",
        "Parks & Gardens",
        "Jogging Tracks",
        "Playground Areas",
        "Community Centers",
      ],
    },
    wellness: {
      title: "Salons/Spa",
      color: "from-[#B86830] to-[#B86830]",
      facilities: [
        "Lakme Salon",
        "VLCC",
        "Naturals",
        "Jawed Habib",
        "Spa Centers",
        "Beauty Parlors",
        "Wellness Centers",
        "Massage Therapy",
      ],
    },
  }

  const categoryKeys = Object.keys(nearbyFacilities) as Array<keyof typeof nearbyFacilities>

  return (
    <div className="min-h-screen bg-[#F8D794]/30" style={{ fontFamily: "'Merriweather', serif" }}>
      {/* Main Content Section */}
      <div ref={containerRef} className="flex">
        {/* Left Content Panel */}
        <div className="w-1/3 p-12 flex flex-col justify-center">
          <div ref={leftContentRef} className="max-w-lg">
            {/* Subtitle */}
            <div className="mb-4">
              <span
                className="text-md font-medium text-[#111A19] tracking-wider uppercase"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
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
              Discover unparalleled convenience and connectivity in the heart of Kalyan. Where modern infrastructure
              meets strategic location advantages.
            </p>
            {/* Key Feature Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-4xl font-medium text-[#390517]">NIRVANA GARDENS</h2>
              </div>
              <p className="text-gray-600 text-2xl leading-relaxed mb-6">
                Situated on Gandhare Road in Kalyan West, Nirvana Gardens offers seamless connectivity to key business
                hubs through well-developed road and rail networks. Experience proximity to upscale amenities including
                fine dining, entertainment, shopping, healthcare, and reputed educational institutions.
              </p>
              {/* Features Grid */}
              <div ref={featuresRef} className="space-y-6 mb-8">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-1 border-l-4 border-[#284139]/30 pl-6 rounded-2xl">
                      <h3 className="font-semibold text-2xl text-[#284139] mb-2 leading-tight">{feature.title}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              <div
                className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"
                style={{ animationDelay: "1s" }}
              ></div>
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
          <div ref={facilitiesHeaderRef} className="text-center mb-12">
            <h2 className="text-6xl font-light text-[#390517] mb-4">
              Nearby <span className="font-normal">Facilities</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Everything you need is within reach. Explore the comprehensive amenities and services available in your
              neighborhood.
            </p>
          </div>

          {/* Category Tabs */}
          <div ref={facilitiesTabsRef} className="flex flex-wrap justify-center gap-4 mb-12">
            {categoryKeys.map((category) => {
              const facility = nearbyFacilities[category]
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full border-2 border-[#B86830] transition-all duration-300
                     ${isActive ? "bg-[#B86830] text-[#F8D794] shadow-lg scale-105" : "bg-white/30 text-[#B86830] hover:bg-[#284139] hover:text-[#F8D794] shadow-md hover:shadow-lg"}`}
                >
                  <span className="font-medium text-xl">{facility.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Category Display */}
          <div ref={facilitiesContentRef} className="bg-white/50 rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
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
                  className="facility-item bg-gradient-to-br from-gray-50/40 to-white/50 p-4 rounded-lg border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${nearbyFacilities[activeCategory as keyof typeof nearbyFacilities].color} group-hover:scale-125 transition-transform duration-300`}
                    ></div>
                    <span className="text-gray-800 text-lg font-medium group-hover:text-[#390517] transition-colors duration-300">
                      {facility}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KalyanConnectivityShowcase
