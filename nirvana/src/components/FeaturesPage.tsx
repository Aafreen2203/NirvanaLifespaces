"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Flame, Trash2, MoveUpRight, KeyRound, PhoneCall } from "lucide-react"
import leaf from "../assets/leaf.webp"
import bgImage from "../assets/bg image.avif"
import livingroom from "../assets/building.jpg"

gsap.registerPlugin(ScrollTrigger)

const FeaturesPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLUListElement>(null)
  const securityRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      gsap.fromTo(featuresRef.current?.children || [],
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power2.out", delay: 0.3 }
      )
      gsap.fromTo(securityRef.current?.children || [],
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power2.out", delay: 0.5 }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: "'Merriweather', serif"
      }}
    >
      {/* Overlay leaf image */}
      <img
        src={leaf}
        alt="Leaf Overlay"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ mixBlendMode: 'multiply', opacity: 0.5 }}
      />
      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col items-center">
        {/* Intro Section */}
        <div ref={heroRef} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#284139] mb-4 leading-tight">
            FEATURES
          </h1>
          <p className="text-lg md:text-xl text-[#284139]/80 max-w-2xl mx-auto leading-relaxed">
            Nirvana Gardens is designed for modern, secure, and comfortable living. Our thoughtfully planned features and security systems ensure peace of mind and a premium lifestyle for every resident.
          </p>
        </div>
        {/* Image + Content Card */}
        <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left: Image fills gray box */}
          <div className="md:w-1/2 w-full h-[350px] md:h-auto bg-[#e9ede7] flex items-stretch justify-center">
            <img
              src={livingroom}
              alt="Premium Building"
              className="w-full h-full object-cover rounded-none md:rounded-l-3xl"
              style={{ objectPosition: "center" }}
            />
          </div>
          {/* Right: Features */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#284139] mb-8">Key Features</h2>
            <ul ref={featuresRef} className="space-y-6 mb-10">
              <li className="flex items-center text-xl text-[#284139] font-medium">
                <span className="mr-4 text-green-700"><Shield size={32} /></span>
                Earthquake-resistant RCC structure
              </li>
              <li className="flex items-center text-xl text-[#284139] font-medium">
                <span className="mr-4 text-green-700"><Flame size={32} /></span>
                Integrated fire protection systems
              </li>
              <li className="flex items-center text-xl text-[#284139] font-medium">
                <span className="mr-4 text-green-700"><Trash2 size={32} /></span>
                Garbage disposal system
              </li>
              <li className="flex items-center text-xl text-[#284139] font-medium">
                <span className="mr-4 text-green-700"><MoveUpRight size={32} /></span>
                High-speed passenger lifts & stretcher lift
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-[#284139] mb-6">3-Tier Security Features</h2>
            <ul ref={securityRef} className="space-y-6">
              <li className="flex items-center text-xl text-[#284139] font-medium">
                <span className="mr-4 text-green-700"><KeyRound size={32} /></span>
                Godrej video door phone
              </li>
              <li className="flex items-center text-xl text-[#284139] font-medium">
                <span className="mr-4 text-green-700"><PhoneCall size={32} /></span>
                Intercom connection to clubhouse, security, parking, and other apartments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage
