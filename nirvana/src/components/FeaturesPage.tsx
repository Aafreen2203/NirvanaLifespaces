"use client"
import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Flame, Trash2, MoveUpRight, KeyRound, PhoneCall, Star, Award, CheckCircle } from "lucide-react"
import leaf from "../assets/leaf.webp"
import leaf2 from "../assets/leaf2.jpg"
import livingroom from "../assets/building.jpg"

gsap.registerPlugin(ScrollTrigger)

const FeaturesPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLUListElement>(null)
  const securityRef = useRef<HTMLUListElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation on scroll
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
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

      // Card container animation on scroll
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Image animation on scroll
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Features list animation on scroll
      gsap.fromTo(
        featuresRef.current?.children || [],
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Security features animation on scroll
      gsap.fromTo(
        securityRef.current?.children || [],
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: securityRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { icon: <Award className="w-8 h-8" />, number: "100+", label: "Premium Features" },
    { icon: <Shield className="w-8 h-8" />, number: "24/7", label: "Security System" },
    { icon: <Star className="w-8 h-8" />, number: "5★", label: "Luxury Rating" },
  ]

  return (
    <div
      ref={containerRef}
      style={{
        backgroundImage: `url(${leaf2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        fontFamily: "'Merriweather', serif",
      }}
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* Overlay leaf image */}
      <img
        src={leaf || "/placeholder.svg"}
        alt="Leaf Overlay"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ mixBlendMode: "multiply", opacity: 0.7 }}
      />

      {/* Main content wrapper for consistent width */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 flex flex-col items-center">
        {/* Intro Section */}
        <div ref={heroRef} className="text-center mb-16 max-w-4xl">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#284139] to-[#3a5a4f] rounded-full mb-6 shadow-2xl">
            <CheckCircle className="w-10 h-10 text-[#F8D794]" />
          </div> */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#284139] mb-6 leading-tight">
            FEATURES
            {/* <span className="block text-transparent bg-gradient-to-r from-[#284139] to-[#3a5a4f] bg-clip-text">
              FEATURES
            </span> */}
          </h1>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-[#284139] to-[#F8D794] mx-auto mb-6 rounded-full"></div> */}
          <p className="text-lg md:text-xl text-[#284139]/80 max-w-3xl mx-auto leading-relaxed">
            Nirvana Gardens is designed for modern, secure, and comfortable living. Our thoughtfully planned features
            and security systems ensure peace of mind and a premium lifestyle for every resident.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-4xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#284139] to-[#3a5a4f] rounded-full mb-4 text-[#F8D794]">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#284139] mb-2">{stat.number}</div>
              <div className="text-[#284139]/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Image + Content Card */}
        <div
          ref={cardRef}
          className="w-full max-w-6xl bg-white/25 backdrop-blur-2xl rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-white/30 relative"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#284139]/20 to-transparent rounded-br-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#F8D794]/20 to-transparent rounded-tl-3xl"></div>

          {/* Left: Enhanced Image Section */}
          <div
            ref={imageRef}
            className="lg:w-1/2 w-full h-[400px] lg:h-auto bg-gradient-to-br from-[#e9ede7] to-[#d4ddd2] flex items-stretch justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#284139]/10 to-transparent"></div>
            <img
              src={livingroom || "/placeholder.svg"}
              alt="Premium Building"
              className="w-full h-full object-cover rounded-none lg:rounded-l-3xl relative z-10 hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: "center" }}
            />
            {/* Image overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#284139]/20 via-transparent to-transparent z-20"></div>
          </div>

          {/* Right: Enhanced Features Section */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center p-8 lg:p-12 relative">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <div className="w-full h-full bg-gradient-to-br from-[#284139] to-transparent rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#284139] to-[#3a5a4f] rounded-xl flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-[#F8D794]" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#284139] drop-shadow-lg">Key Features</h2>
              </div>

              <ul ref={featuresRef} className="space-y-6 mb-12">
                <li className="flex items-center text-lg lg:text-xl text-[#284139] font-semibold drop-shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="mr-4 p-3 bg-gradient-to-br from-[#284139]/10 to-[#284139]/5 rounded-xl group-hover:from-[#284139]/20 group-hover:to-[#284139]/10 transition-all duration-300">
                    <Shield size={28} className="text-[#284139]" />
                  </div>
                  <span className="flex-1">Earthquake-resistant RCC structure</span>
                </li>
                <li className="flex items-center text-lg lg:text-xl text-[#284139] font-semibold drop-shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="mr-4 p-3 bg-gradient-to-br from-[#284139]/10 to-[#284139]/5 rounded-xl group-hover:from-[#284139]/20 group-hover:to-[#284139]/10 transition-all duration-300">
                    <Flame size={28} className="text-[#284139]" />
                  </div>
                  <span className="flex-1">Integrated fire protection systems</span>
                </li>
                <li className="flex items-center text-lg lg:text-xl text-[#284139] font-semibold drop-shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="mr-4 p-3 bg-gradient-to-br from-[#284139]/10 to-[#284139]/5 rounded-xl group-hover:from-[#284139]/20 group-hover:to-[#284139]/10 transition-all duration-300">
                    <Trash2 size={28} className="text-[#284139]" />
                  </div>
                  <span className="flex-1">Garbage disposal system</span>
                </li>
                <li className="flex items-center text-lg lg:text-xl text-[#284139] font-semibold drop-shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="mr-4 p-3 bg-gradient-to-br from-[#284139]/10 to-[#284139]/5 rounded-xl group-hover:from-[#284139]/20 group-hover:to-[#284139]/10 transition-all duration-300">
                    <MoveUpRight size={28} className="text-[#284139]" />
                  </div>
                  <span className="flex-1">High-speed passenger lifts & stretcher lift</span>
                </li>
              </ul>

              <div className="border-t border-[#284139]/20 pt-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#284139] to-[#3a5a4f] rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-[#F8D794]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#284139] drop-shadow-lg">3-Tier Security</h3>
                </div>
                <ul ref={securityRef} className="space-y-6">
                  <li className="flex items-center text-lg lg:text-xl text-[#284139] font-semibold drop-shadow-lg group hover:scale-105 transition-transform duration-300">
                    <div className="mr-4 p-3 bg-gradient-to-br from-[#F8D794]/20 to-[#F8D794]/10 rounded-xl group-hover:from-[#F8D794]/30 group-hover:to-[#F8D794]/20 transition-all duration-300">
                      <KeyRound size={28} className="text-[#284139]" />
                    </div>
                    <span className="flex-1">Godrej video door phone</span>
                  </li>
                  <li className="flex items-center text-lg lg:text-xl text-[#284139] font-semibold drop-shadow-lg group hover:scale-105 transition-transform duration-300">
                    <div className="mr-4 p-3 bg-gradient-to-br from-[#F8D794]/20 to-[#F8D794]/10 rounded-xl group-hover:from-[#F8D794]/30 group-hover:to-[#F8D794]/20 transition-all duration-300">
                      <PhoneCall size={28} className="text-[#284139]" />
                    </div>
                    <span className="flex-1">
                      Intercom connection to clubhouse, security, parking, and other apartments
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-[#284139]/30 to-transparent rounded-full"></div>
      </div>
    </div>
  )
}

export default FeaturesPage
