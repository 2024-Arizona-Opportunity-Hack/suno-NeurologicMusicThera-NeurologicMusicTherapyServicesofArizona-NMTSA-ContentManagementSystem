import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Search, Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white py-4 sm:py-6 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="NMTSA Logo" width={200} height={70} className="w-auto h-auto max-h-16" />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-50 md:items-center space-y-4 md:space-y-0 md:space-x-6`}>
          <Link href="/our-story" className="block text-black hover:text-gray-700 text-lg font-semibold">ABOUT US</Link>
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => toggleDropdown('programs')}
              className="text-black hover:text-gray-700 text-lg font-semibold flex items-center w-full justify-between md:inline-flex md:w-auto"
            >
              OUR PROGRAMS
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className={`${activeDropdown === 'programs' ? 'block' : 'hidden'} md:absolute md:left-0 mt-2 w-48 bg-white rounded-md shadow-lg`}>
              <Link href="/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Client Resource Videos</Link>
              <Link href="#program2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Research papers</Link>
              <Link href="#program3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blogs</Link>
            </div>
          </div>
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => toggleDropdown('opportunities')}
              className="text-black hover:text-gray-700 text-lg font-semibold flex items-center w-full justify-between md:inline-flex md:w-auto"
            >
              OPPORTUNITIES
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className={`${activeDropdown === 'opportunities' ? 'block' : 'hidden'} md:absolute md:left-0 mt-2 w-48 bg-white rounded-md shadow-lg`}>
              <Link href="#opportunity1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Internships</Link>
              <Link href="#opportunity2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Volunteering</Link>
              <Link href="#opportunity3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Job Opportunities</Link>
            </div>
          </div>
          <Link href="/educational" className="block text-black hover:text-gray-700 text-lg font-semibold">EDUCATIONAL</Link>
          <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
          <a
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=J2RM9AGPDLDX6&ssrt=1728796488283"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f5c242] text-black px-4 py-2 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300"
          >
            DONATE
          </a>
          <ArrowRight className="w-5 h-5 text-red-500 animate-pulse" />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
