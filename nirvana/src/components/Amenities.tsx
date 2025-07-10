"use client"

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
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
  { img: poolTable, name: "Pool Table", description: "Professional pool table for entertainment" },
  { img: tt, name: "Table Tennis", description: "Indoor table tennis for active recreation" },
  { img: chess, name: "Chess", description: "Strategic board games for mental stimulation" },
  { img: carrom, name: "Carrom", description: "Traditional carrom board for family fun" },
  { img: kidsplayarea, name: "Kids Play Area", description: "Safe and engaging play zone for children" },
  { img: jogtrack, name: "Jogging Track", description: "Dedicated jogging track for fitness enthusiasts" },
  { img: court, name: "Multi-Purpose Court", description: "Versatile sports court for various activities" },
  { img: seating, name: "Main Pool", description: "Luxurious swimming pool for relaxation" },
]

const Amenities = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation on scroll
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power1.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
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
          duration: 0.5,
          ease: "power1.out",
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
          ease: "power2.out",
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
              duration: 0.6,
              ease: "power2.out",
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

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <div
      ref={containerRef}
      className="min-h-[80vh] bg-[#284139]/80 py-10 px-4 md:py-16 md:px-8"
      style={{ fontFamily: "'Merriweather', serif" }}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#F8D794] mb-3 md:mb-4 leading-tight mx-auto">
            PREMIUM AMENITIES
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#F8D794] mx-auto leading-relaxed text-center">
            Experience luxury living with our world-class amenities
            <br />
            designed to enhance your lifestyle.
            <br />
            From fitness to recreation, we provide everything you need for a comfortable and fulfilling life.
          </p>
        </div>
        {/* Amenities Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className={`relative h-40 md:h-64 rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={amenity.img || "/placeholder.svg"}
                alt={amenity.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found"
                }}
              />
              {/* Overlay - only on hover */}
              {hoveredIndex === idx && <div className="absolute inset-0 bg-[#F8D794]/40 transition-all duration-300" />}
              {/* Text Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center text-[#284139] p-2 sm:p-4 text-center transition-all duration-400 ${hoveredIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 tracking-wide">{amenity.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Amenities
