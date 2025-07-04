import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ConnectivityPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      // Map animation
      gsap.fromTo(mapRef.current,
        { opacity: 0, scale: 0.8, rotationY: 15 },
        { 
          opacity: 1, 
          scale: 1, 
          rotationY: 0,
          duration: 1.5, 
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current?.children || [],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
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
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for decorative elements
      gsap.to(".floating", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: "🚗", title: "Road Networks", desc: "Well-developed connectivity to Thane, Bhiwandi & Navi Mumbai" },
    { icon: "🚊", title: "Rail Access", desc: "Direct railway connections for seamless commuting" },
    { icon: "🏗️", title: "MTHL Project", desc: "Upcoming Mumbai Trans-Harbour Link for enhanced connectivity" },
    { icon: "🛣️", title: "Ring Road", desc: "Kalyan Ring Road development for improved infrastructure" },
    { icon: "🏥", title: "Healthcare", desc: "Proximity to quality healthcare facilities" },
    { icon: "🎓", title: "Education", desc: "Access to reputed schools and educational institutions" }
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#284139]/40 overflow-hidden"
      style={{ fontFamily: "'Merriweather', serif" }}
    >
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="floating absolute top-40 right-20 w-48 h-48 bg-green-200/20 rounded-full blur-xl"></div>
        <div className="floating absolute bottom-20 left-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-xl"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-semibold rounded-full shadow-lg">
              PRIME LOCATION
            </span>
          </div> */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#284139] via-[#809076] to-[#284139] bg-clip-text text-transparent mb-6 leading-tight">
            A COSMOPOLITAN OF
            <br />
            <span className="text-6xl md:text-8xl">CONVENIENCE</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light mb-8 max-w-4xl mx-auto">
            WITH EASE OF <span className="font-bold text-green-700">CONNECTIVITY</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <img
              ref={mapRef}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connectivity-hAlUyiS1o3nmgpweb9otbK5btBY4GO.png"
              alt="Kalyan Connectivity Map"
              className="w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Strategic Location Advantage</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kalyan's prime location offers seamless connectivity to key business hubs like 
                  <span className="font-semibold text-blue-700"> Thane, Bhiwandi, and Navi Mumbai</span> through 
                  well-developed road and rail networks.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-green-700">Nirvana Gardens</span>, situated on Gandhare Road in Kalyan West, 
                  is a sought-after residential destination with proximity to upscale amenities.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Future Infrastructure</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Upcoming projects like the <span className="font-bold">Mumbai Trans-Harbour Link (MTHL)</span> and 
                  <span className="font-bold"> Kalyan Ring Road</span> will further boost connectivity.
                </p>
                <p className="text-lg leading-relaxed">
                  Ongoing infrastructure developments make Kalyan an ideal choice for families and professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Connectivity <span className="text-green-700">Highlights</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      {/* <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Unmatched Connectivity
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover why Nirvana Gardens is the perfect blend of convenience and luxury
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore More
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ConnectivityPage;