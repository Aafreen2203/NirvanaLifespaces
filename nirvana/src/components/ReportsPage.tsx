"use client"

import { FileText, Download, Leaf } from "lucide-react"
import leaf from "../assets/leaf.webp"
import leaf2 from "../assets/leaf2.jpg"

export default function NirvanaLifespaces() {

  const handlePDFClick = (url: string, title: string) => {
    window.open(url, "_blank")
  }

  const pdfData = [
    {
      title: "PMR Report",
      subtitle: "Jul-Dec 2024",
      url: "https://nirvanalifespaces.com/pdf/PMR%20REPORT%20JUL%20DEC%2024%20-%20SQYLINES%20BUILDERS%20LLP.pdf",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "Environmental Clearance",
      subtitle: "SQYLINE Builders LLP",
      url: "https://nirvanalifespaces.com/pdf/EC_SQYLINE%20BUILDERS%20LLP_07.02.2024.pdf",
      icon: <Leaf className="w-8 h-8" />,
    },
    {
      title: "CTE Annex",
      subtitle: "Construction Permit",
      url: "https://nirvanalifespaces.com/pdf/ANNEX%2002%20CTE%20SQYLINE%20BUILDERS%20LLP_01.03.2024.pdf",
      icon: <Download className="w-8 h-8" />,
    },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${leaf2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        minHeight: '100vh',
      }}
    >
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nirvana-9TELzNpNVOFqxSmVuVt7Sv7fQXuueH.png"
                alt="Nirvana Lifespaces Logo"
                className="h-16 w-auto filter brightness-0 opacity-80"
              />
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  A GATEWAY OF{" "}
                  <span className="text-green-600 relative">
                    GREEN
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-400 rounded-full opacity-60"></div>
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                  LIFESTYLE WITH RESPONSIBLE DEVELOPMENT
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Nirvana Lifespaces is envisioned by <strong className="text-gray-800">Mr. Mokshay Sadhwani</strong>,
                  with a commitment to contribute to nature and align the company ethos by adopting sustainable
                  construction practices and the integration of energy-efficient technologies to deliver sustainable
                  homes.
                </p>

                <p className="text-lg">
                  Nirvana Lifespaces emphasizes developing green spaces, state-of-the-art landscaping, meticulously
                  planned urban parks, and themed gardens in all their upcoming projects. Prioritizing the health and
                  happiness of homeowners of Nirvana Lifespaces, the focus is to ensure environmental preservation and
                  enhance the well-being of all.
                </p>

                <p className="text-lg">
                  With a harmonious integration of nature, fresh air, and accommodating more plantations, Nirvana
                  Lifespaces not only enriches lives but also promises a sustainable and equitable world.
                </p>
              </div>
            </div>

            {/* PDF Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Important Documents</h3>
              <div className="grid gap-4">
                {pdfData.map((pdf, index) => (
                  <button
                    key={index}
                    onClick={() => handlePDFClick(pdf.url, pdf.title)}
                    className="group flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-green-50/80 border border-green-100"
                  >
                    <div className="flex-shrink-0 p-3 bg-green-100 rounded-xl text-green-600 group-hover:bg-green-200 transition-colors duration-300">
                      {pdf.icon}
                    </div>
                    <div className="flex-grow text-left">
                      <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                        {pdf.title}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                        {pdf.subtitle}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-green-600 group-hover:translate-x-1 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Plant Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Plant Image */}
              {/* <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8DuyNjKDKpcgAzP4yFyrqphQtRbAx6.png"
                alt="Green Plant"
                className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
