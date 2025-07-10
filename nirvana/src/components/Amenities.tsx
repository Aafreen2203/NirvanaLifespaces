"use client"

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star, Award, Users, Heart } from "lucide-react"
import carrom from "../assets/carrom.jpg"
import chess from "../assets/chess.jpg"
import court from "../assets/court.jpg"
import jogtrack from "../assets/jogtrack.jpg"
import kidsplayarea from "../assets/kidsplayarea.jpg"
import poolTable from "../assets/poolTable.jpg"
import seating from "../assets/seating.jpg"
import tt from "../assets/tt.jpg"

gsap.registerPlugin(ScrollTrigger)

const amenities = [
  {
    img: poolTable,
    name: "Pool Table",
    description: "Professional pool table for entertainment",
    category: "Recreation",
    // icon: "🎱",
  },
  {
    img: tt,
    name: "Table Tennis",
    description: "Indoor table tennis for active recreation",
    category: "Sports",
    // icon: "🏓",
  },
  {
    img: chess,
    name: "Chess",
    description: "Strategic board games for mental stimulation",
    category: "Games",
    // icon: "♟️",
  },
  {
    img: carrom,
    name: "Carrom",
    description: "Traditional carrom board for family fun",
    category: "Games",
    // icon: "🎯",
  },
  {
    img: kidsplayarea,
    name: "Kids Play Area",
    description: "Safe and engaging play zone for children",
    category: "Family",
    // icon: "🎪",
  },
  {
    img: jogtrack,
    name: "Jogging Track",
    description: "Dedicated jogging track for fitness enthusiasts",
    category: "Fitness",
    // icon: "🏃",
  },
  {
    img: court,
    name: "Multi-Purpose Court",
    description: "Versatile sports court for various activities",
    category: "Sports",
    // icon: "⚽",
  },
  {
    img: seating,
    name: "Swimming Pool",
    description: "Luxurious swimming pool for relaxation",
    category: "Recreation",
    // icon: "🏊",
  },
]

const categories = ["All", "Recreation", "Sports", "Games", "Family", "Fitness"]

const Amenities = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const transitionRef = useRef<HTMLDivElement>(null)

  const filteredAmenities =
    activeCategory === "All" ? amenities : amenities.filter((amenity) => amenity.category === activeCategory)

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Transition section animation
      gsap.fromTo(
        transitionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: transitionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Header animation on scroll
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Stats animation
      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Filters animation
      gsap.fromTo(
        filtersRef.current?.children || [],
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Grid container animation on scroll
      gsap.fromTo(
        gridRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Individual amenity items animation on scroll
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Staggered animation for each amenity with different directions
      amenities.forEach((_, index) => {
        const element = gridRef.current?.children[index]
        if (element) {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              x: index % 2 === 0 ? -30 : 30,
              rotationY: index % 2 === 0 ? -10 : 10,
            },
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [isLoaded])

  // Re-animate grid when category changes
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
      )
    }
  }, [activeCategory])

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const stats = [
    { icon: <Award className="w-8 h-8" />, number: "8+", label: "Premium Amenities" },
    { icon: <Users className="w-8 h-8" />, number: "24/7", label: "Access Available" },
    { icon: <Star className="w-8 h-8" />, number: "5★", label: "Luxury Experience" },
    { icon: <Heart className="w-8 h-8" />, number: "100%", label: "Family Friendly" },
  ]

  return (
    <div className="relative">
      {/* Enhanced Transition Section */}
      <div
        ref={transitionRef}
        className="relative py-20 overflow-hidden bg-gradient-to-br from-[#F8D794]/20 via-white/10 to-[#284139]/10"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-30"
            viewBox="0 0 1200 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="amenityGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#284139" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#F8D794" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#284139" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="100" r="50" fill="url(#amenityGradient1)" className="animate-pulse" />
            <circle
              cx="800"
              cy="150"
              r="30"
              fill="url(#amenityGradient1)"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="1000"
              cy="80"
              r="40"
              fill="url(#amenityGradient1)"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </svg>
        </div>

        {/* Central Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-8">
          {/* Decorative Icon */}
          {/* <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-full mb-8 shadow-2xl border border-white/30">
            <Star className="w-12 h-12 text-[#284139]" />
          </div> */}

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-[#284139] mb-6 leading-tight">
            Lifestyle
            <span className="block text-transparent bg-gradient-to-r from-[#284139] to-[#B86830] bg-clip-text">
              Redefined
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#284139]/30 rounded-full"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-[#284139]/20 to-[#F8D794]/20 rounded-full mx-4 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#284139] rounded-full"></div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#284139]/30 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-[#284139]/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Experience unparalleled luxury with our world-class amenities designed to elevate every moment of your life.
            From recreation to wellness, we've crafted spaces that inspire and rejuvenate.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="min-h-[80vh] bg-gradient-to-br from-[#284139]/90 via-[#284139]/85 to-[#1a2e25]/90 py-10 px-4 md:py-16 md:px-8 relative overflow-hidden"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F8D794] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-40 right-20 w-40 h-40 bg-[#F8D794] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#F8D794] rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 relative z-10 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Header Section */}
          <div ref={headerRef} className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#F8D794]/30 to-[#F8D794]/10 backdrop-blur-xl rounded-full mb-6 shadow-2xl border border-[#F8D794]/20">
              <Award className="w-10 h-10 text-[#F8D794]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#F8D794] mb-4 md:mb-6 leading-tight mx-auto">
              PREMIUM AMENITIES
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F8D794] to-transparent mx-auto mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-[#F8D794]/90 mx-auto leading-relaxed text-center max-w-4xl">
              Experience luxury living with our world-class amenities designed to enhance your lifestyle.
              <br />
              From fitness to recreation, we provide everything you need for a comfortable and fulfilling life.
            </p>
          </div>

          {/* Stats Section */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 text-center border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 text-[#F8D794] group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#F8D794] mb-1 md:mb-2">{stat.number}</div>
                <div className="text-[#F8D794]/80 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Category Filters */}
          <div ref={filtersRef} className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 border-2 focus:outline-none transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm ${
                  activeCategory === category
                    ? "bg-[#F8D794]/20 text-[#F8D794] shadow-xl border-[#F8D794]/40 shadow-[#F8D794]/20"
                    : "bg-white/10 backdrop-blur-sm text-[#F8D794]/80 hover:bg-white/20 border-[#F8D794]/20 hover:border-[#F8D794]/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Amenities Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto"
          >
            {filteredAmenities.map((amenity, idx) => (
              <div
                key={`${amenity.name}-${activeCategory}`}
                className={`relative h-48 md:h-72 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Background Image */}
                <img
                  src={amenity.img || "/placeholder.svg"}
                  alt={amenity.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found"
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#284139]/80 via-[#284139]/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-[#F8D794]/90 backdrop-blur-sm text-[#284139] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {amenity.category}
                </div>



                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <div
                    className={`transition-all duration-400 ${hoveredIndex === idx ? "opacity-100 translate-y-0" : "opacity-90 translate-y-2"}`}
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white leading-tight">
                      {amenity.name}
                    </h3>
                    <p
                      className={`text-sm md:text-base text-white/90 leading-relaxed transition-all duration-300 ${hoveredIndex === idx ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"}`}
                    >
                      {amenity.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 border-2 border-[#F8D794] rounded-2xl transition-all duration-300 ${hoveredIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                ></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16">
            {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F8D794]/30 to-[#F8D794]/10 backdrop-blur-xl rounded-full mb-6 shadow-2xl border border-[#F8D794]/20">
              <Heart className="w-8 h-8 text-[#F8D794]" />
            </div> */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#F8D794] mb-4">Your Perfect Lifestyle Awaits</h3>
            <p className="text-[#F8D794]/80 text-lg max-w-2xl mx-auto mb-8">
              Discover the perfect blend of luxury, comfort, and convenience at Nirvana Gardens.
            </p>
            {/* <button className="bg-gradient-to-r from-[#F8D794] to-[#e6c77a] hover:from-[#e6c77a] hover:to-[#F8D794] text-[#284139] px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Explore More Amenities
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amenities
