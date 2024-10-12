import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { image: '/nmsta1.webp', alt: 'NMTSA clinic exterior' },
    { image: '/nmtsa2.webp', alt: 'Music therapy session' },
    { image: '/nmtsa3.jpeg', alt: 'Group therapy session' },
    { image: '/nmtsa.webp', alt: 'Individual therapy' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center space-x-6 mb-2">
            <div className="relative">
              <select className="appearance-none bg-transparent pr-8 py-1 focus:outline-none text-sm">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f5c242] focus:border-[#f5c242] text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Image src="/logo.png" alt="NMTSA Logo" width={240} height={96} className="w-auto h-20" />
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-black focus:outline-none focus:underline text-base font-semibold">
                Our Work
              </Link>
              <Link href="#" className="text-black focus:outline-none focus:underline text-base font-semibold">
                Reports & Resources
              </Link>
              <Link href="#" className="text-black focus:outline-none focus:underline text-base font-semibold">
                How to Help
              </Link>
              <Link href="#" className="text-black focus:outline-none focus:underline text-base font-semibold">
                News & Stories
              </Link>
              <Link href="#" className="text-black focus:outline-none focus:underline text-base font-semibold">
                About Us
              </Link>
              <Link href="#" className="bg-[#f5c242] text-white px-6 py-2 rounded-md hover:bg-[#e5b232] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5c242] focus:ring-opacity-50 font-bold text-lg uppercase">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-[calc(100vh-96px)]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f5c242] focus:ring-opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#f5c242]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f5c242] focus:ring-opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#f5c242]" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-[#f5c242]' : 'bg-white bg-opacity-50'
              } focus:outline-none focus:ring-2 focus:ring-[#f5c242] focus:ring-opacity-50`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
