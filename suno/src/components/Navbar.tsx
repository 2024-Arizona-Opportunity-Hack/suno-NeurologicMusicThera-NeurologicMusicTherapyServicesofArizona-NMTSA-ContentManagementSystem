import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Search } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="bg-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="NMTSA Logo" width={200} height={70} className="w-auto h-auto" />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/our-story" className="text-black hover:text-gray-700 text-lg font-semibold">ABOUT US</Link>
          <div className="relative group">
            <Link href="#" className="text-black hover:text-gray-700 relative group text-lg font-semibold">
              OUR PROGRAMS
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Client Resource Videos</Link>
              <Link href="#program2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Research papers</Link>
              <Link href="#program3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blogs</Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="#" className="text-black hover:text-gray-700 relative group text-lg font-semibold">
              OPPORTUNITIES
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="#opportunity1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Internships</Link>
              <Link href="#opportunity2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Volunteering</Link>
              <Link href="#opportunity3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Job Opportunities</Link>
            </div>
          </div>
          {/* <Link href="#" className="text-black hover:text-gray-700 text-lg font-semibold"></Link> */}
        </nav>
        <div className="relative flex items-center">
          <Search className="w-6 h-6 text-gray-500 mr-4" />
          <a
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=J2RM9AGPDLDX6&ssrt=1728796488283"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f5c242] text-black px-8 py-3 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300"
          >
            DONATE
          </a>
          <ArrowRight className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-6 text-red-500 animate-pulse" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
