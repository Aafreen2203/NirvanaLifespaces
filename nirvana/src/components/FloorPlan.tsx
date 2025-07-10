"use client"

import { useState, useEffect, useRef } from "react"
import { BedDouble, Bath, Car, ArrowRight, Home } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NirvanaFloorPlan from "../assets/NirvanaFloorPlan.jpg"
import f1 from "../assets/f1nobg.png"
import f2 from "../assets/f2nobg.png"
import f3 from "../assets/f3nobg.png"
import f4 from "../assets/f4nobg.png"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const LAYOUTS = [
  {
    key: "1bhk",
    tab: "1 Bedroom",
    title: "1 Bedroom Layout",
    area: "650 sq. ft.",
    img: f1,
    desc: "Perfect for singles or couples, this layout maximizes space and natural light for a cozy, modern lifestyle.",
    features: [
      { icon: <BedDouble size={20} />, label: "1" },
      { icon: <Bath size={20} />, label: "2" },
      { icon: <Car size={20} />, label: "1" },
    ],
  },
  {
    key: "2bhk",
    tab: "2 Bedroom",
    title: "2 Bedroom Layout",
    area: "1100 sq. ft.",
    img: f2,
    desc: "Ideal for small families, offering a harmonious blend of comfort, privacy, and functional living spaces.",
    features: [
      { icon: <BedDouble size={20} />, label: "2" },
      { icon: <Bath size={20} />, label: "2" },
      { icon: <Car size={20} />, label: "2" },
    ],
  },
  {
    key: "3bhk",
    tab: "3 Bedroom",
    title: "3 Bedroom Layout",
    area: "1500 sq. ft.",
    img: f3,
    desc: "Spacious and versatile, designed for growing families who value extra room and contemporary elegance.",
    features: [
      { icon: <BedDouble size={20} />, label: "3" },
      { icon: <Bath size={20} />, label: "3" },
      { icon: <Car size={20} />, label: "2" },
    ],
  },
  {
    key: "4bhk",
    tab: "4 Bedroom",
    title: "4 Bedroom Layout",
    area: "1800 sq. ft.",
    img: f4,
    desc: "Ultimate luxury with expansive living areas and premium finishes for the discerning family.",
    features: [
      { icon: <BedDouble size={20} />, label: "4" },
      { icon: <Bath size={20} />, label: "4" },
      { icon: <Car size={20} />, label: "2" },
    ],
  },
]

export default function FloorPlan() {
  const [selected, setSelected] = useState("2bhk")
  const current = LAYOUTS.find((l) => l.key === selected)

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const mainImageRef = useRef<HTMLDivElement>(null)
  const layoutTitleRef = useRef<HTMLHeadingElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const layoutCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Main floor plan image animation
      gsap.fromTo(
        mainImageRef.current,
        {
          opacity: 0,
          y: 80,
          rotationX: 15,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainImageRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Layout options title animation
      gsap.fromTo(
        layoutTitleRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: layoutTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Tabs stagger animation
      gsap.fromTo(
        tabsRef.current?.children || [],
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Layout card animation
      gsap.fromTo(
        layoutCardRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: layoutCardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Animate layout card when selection changes
  useEffect(() => {
    if (layoutCardRef.current) {
      gsap.fromTo(
        layoutCardRef.current,
        { opacity: 0.7, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      )
    }
  }, [selected])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F8D794]/30 relative overflow-hidden"
      style={{ fontFamily: "'Merriweather', serif" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#284139] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#284139] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#284139] rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center pt-20 pb-16 px-4">
        {/* Hero Title */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-extrabold text-[#284139] mb-4 tracking-wide">
            <span className="bg-gradient-to-r from-[#284139] to-[#2a4540] bg-clip-text text-transparent">
              Podium Floor Plan
            </span>
          </h2>
          <div className="w-120 h-1 bg-gradient-to-r from-[#284139] to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Main Floor Plan */}
        <div ref={mainImageRef} className="w-full flex justify-center mb-20">
          <div className="rounded-3xl shadow-[0_20px_60px_-15px_rgba(40,65,57,0.3)] hover:shadow-[0_25px_80px_-20px_rgba(40,65,57,0.4)] transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-2">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={NirvanaFloorPlan}
                alt="Main Floor Plan"
                className="rounded-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-700 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#284139]/5 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Layout Options Section */}
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12">
            <h2 ref={layoutTitleRef} className="text-4xl md:text-5xl font-bold text-[#284139] mb-4 tracking-wide">
              <Home className="inline-block mr-3 mb-2" size={40} />
              Layout Options
            </h2>
            <p className="text-[#284139]/70 text-lg max-w-2xl mx-auto">
              Choose from our thoughtfully designed layouts, each crafted to maximize comfort and functionality
            </p>
          </div>

          {/* Enhanced Tabs */}
          <div ref={tabsRef} className="flex justify-center mb-12 gap-3 flex-wrap">
            {LAYOUTS.map((l) => (
              <button
                key={l.key}
                className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 focus:outline-none transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm ${
                  selected === l.key
                    ? "bg-[#284139]/20 text-[#284139] shadow-xl border-[#284139]/40 shadow-[#284139]/20"
                    : "bg-white/20 backdrop-blur-sm text-[#284139]/80 hover:bg-white/30 border-[#284139]/20 hover:border-[#284139]/40"
                }`}
                onClick={() => setSelected(l.key)}
              >
                {l.tab}
              </button>
            ))}
          </div>

          {/* Enhanced Layout Card */}
          {current && (
            <div ref={layoutCardRef} className="w-full flex justify-center">
              <div className="grid md:grid-cols-2 gap-10 items-center bg-white/20 backdrop-blur-md rounded-3xl shadow-[0_25px_80px_-20px_rgba(40,65,57,0.2)] p-8 md:p-12 border border-white/30 max-w-5xl w-full hover:shadow-[0_35px_100px_-25px_rgba(40,65,57,0.3)] transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2">
                {/* Image Section */}
                <div className="flex items-center justify-center h-full group">
                  <div className="rounded-2xl shadow-[0_15px_50px_-10px_rgba(40,65,57,0.3)] flex items-center justify-center w-full max-w-[500px] h-[350px] overflow-hidden relative transform hover:scale-105 transition-all duration-500">
                    <img
                      src={current.img || "/placeholder.svg"}
                      alt={current.title}
                      className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#284139]/5 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-4xl font-bold text-[#284139] mb-2">{current.title}</h3>
                    <p className="text-2xl font-semibold text-[#284139] bg-[#F8D794]/40 inline-block px-4 py-2 rounded-xl backdrop-blur-sm border border-[#F8D794]/30">
                      {current.area}
                    </p>
                  </div>

                  <p className="text-[#284139]/80 text-lg leading-relaxed">{current.desc}</p>

                  <div className="flex items-center gap-4 pt-4 flex-wrap">
                    {current.features.map((f, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 text-[#284139] bg-white/30 backdrop-blur-sm px-4 py-3 rounded-2xl text-base font-semibold shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="text-[#284139]">{f.icon}</span>
                        {f.label}
                      </span>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-[#284139] to-[#2a4540] hover:from-[#2a4540] hover:to-[#284139] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 mt-6 flex items-center gap-2 group transform hover:scale-105 hover:-translate-y-1">
                    Request Details
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
