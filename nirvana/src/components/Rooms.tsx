import { useEffect, useRef, useState } from "react"
import bedroom from "../assets/bedroom.jpg"
import bathroom from "../assets/bathroom.jpg"
import livingroom from "../assets/livingroom.jpg"
import entranceLobby from "../assets/entranceLobby.jpg"
import kitchen from "../assets/kitchen.jpg"

interface ProjectData {
  id: number
  title: string
  description: string
  image: string
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "ARCHITECTURE VILLA DESIGN",
    description: "Modern luxury villa with contemporary design elements and sustainable architecture solutions.",
    image: entranceLobby,
  },
  {
    id: 2,
    title: "MINIMALIST BEDROOM",
    description: "Clean lines and neutral tones create a serene sleeping environment with natural lighting.",
    image: bedroom,
  },
  {
    id: 3,
    title: "LUXURY BATHROOM",
    description: "Spa-like bathroom featuring premium materials and modern fixtures for ultimate relaxation.",
    image: bathroom,
  },
  {
    id: 4,
    title: "MODERN KITCHEN",
    description: "Functional kitchen design with sleek cabinetry and state-of-the-art appliances.",
    image: kitchen,
  },
  {
    id: 5,
    title: "LIVING SPACE",
    description: "Open concept living area that seamlessly blends comfort with contemporary aesthetics.",
    image: livingroom,
  },
]

export default function ImageGallery() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <div className="min-h-[120vh] bg-[#F8D794]/30 py-16 px-8" style={{ fontFamily: "'Merriweather', serif" }}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#284139] mb-6">OUR PROJECT</h1>
          <p className="text-gray-600 text-lg leading-relaxed text-center mx-auto">
            Discover our portfolio of exceptional architectural designs and interior spaces.<br />
            Each project represents our commitment to innovation, sustainability, and timeless elegance.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-6 grid-rows-3 gap-6 h-auto lg:h-[700px]">
          {/* Architecture Villa Design (spans rows 1-2, cols 1-3, slightly smaller than before) */}
          <div className="col-span-3 row-span-2">
            <div
              className={`relative w-full h-72 lg:h-full rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              style={{ transitionDelay: '0ms' }}
            >
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found"
                }}
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-[#284139]/30  transition-all duration-300 ${hoveredIndex === 0 ? 'bg-opacity-20' : 'bg-opacity-0'}`} />
              {/* Text Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center transition-all duration-400 ${hoveredIndex === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">{projects[0].title}</h3>
                <p className="text-sm md:text-base max-w-md leading-relaxed">{projects[0].description}</p>
              </div>
            </div>
          </div>

          {/* Bedroom (row 1, cols 4-6, bigger) */}
          <div className="col-span-3 row-span-1">
            <div
              className={`relative h-48 lg:h-[220px] rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              style={{ transitionDelay: '100ms' }}
            >
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found"
                }}
              />
              {/* overlay */}
              <div className={`absolute inset-0 bg-[#284139]/30 transition-all duration-300 ${hoveredIndex === 1 ? 'bg-opacity-20' : 'bg-opacity-0'}`} />
              <div className={`absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center transition-all duration-400 ${hoveredIndex === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-lg font-bold mb-2 tracking-wide">{projects[1].title}</h3>
                <p className="text-xs opacity-90 leading-relaxed">{projects[1].description}</p>
              </div>
            </div>
          </div>

          {/* Bathroom (row 2, cols 4-6, bigger) */}
          <div className="col-span-3 row-span-1">
            <div
              className={`relative h-48 lg:h-[220px] rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              style={{ transitionDelay: '200ms' }}
            >
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found"
                }}
              />
              {/* overlay */}
              <div className={`absolute inset-0 bg-[#284139]/30 transition-all duration-300 ${hoveredIndex === 2 ? 'bg-opacity-20' : 'bg-opacity-0'}`} />
              <div className={`absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center transition-all duration-400 ${hoveredIndex === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-lg font-bold mb-2 tracking-wide">{projects[2].title}</h3>
                <p className="text-xs opacity-90 leading-relaxed">{projects[2].description}</p>
              </div>
            </div>
          </div>

          {/* Kitchen (row 3, col 1-3, bigger) */}
          <div className="col-span-3 row-span-1">
            <div
              className={`relative h-48 lg:h-[220px] rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              style={{ transitionDelay: '300ms' }}
            >
              <img
                src={projects[3].image}
                alt={projects[3].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found"
                }}
              />
              {/* overlay */}
              <div className={`absolute inset-0 bg-[#284139]/30 transition-all duration-300 ${hoveredIndex === 3 ? 'bg-opacity-20' : 'bg-opacity-0'}`} />
              <div className={`absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center transition-all duration-400 ${hoveredIndex === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-lg font-bold mb-2 tracking-wide">{projects[3].title}</h3>
                <p className="text-xs opacity-90 leading-relaxed">{projects[3].description}</p>
              </div>
            </div>
          </div>

          {/* Living Space (row 3, col 4-6, bigger) */}
          <div className="col-span-3 row-span-1">
            <div
              className={`relative h-48 lg:h-[220px] rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              style={{ transitionDelay: '400ms' }}
            >
              <img
                src={projects[4].image}
                alt={projects[4].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found"
                }}
              />
              {/* overlay */}
              <div className={`absolute inset-0 bg-[#284139]/30 transition-all duration-300 ${hoveredIndex === 4 ? 'bg-opacity-20' : 'bg-opacity-0'}`} />
              <div className={`absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center transition-all duration-400 ${hoveredIndex === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-lg font-bold mb-2 tracking-wide">{projects[4].title}</h3>
                <p className="text-xs opacity-90 leading-relaxed">{projects[4].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}