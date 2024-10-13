import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="bg-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="NMTSA Logo" width={200} height={70} className="w-auto h-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/our-story" className="text-black hover:text-gray-700 text-lg font-semibold">ABOUT US</Link>
          <div className="relative group">
            <Link href="#" className="text-black hover:text-gray-700 text-lg font-semibold flex items-center">
              OUR PROGRAMS
              <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
              <Link href="/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Client Resource Videos</Link>
              <Link href="#program2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Research papers</Link>
              <Link href="#program3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blogs</Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="#" className="text-black hover:text-gray-700 text-lg font-semibold flex items-center">
              OPPORTUNITIES
              <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
              <Link href="#opportunity1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Internships</Link>
              <Link href="#opportunity2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Volunteering</Link>
              <Link href="#opportunity3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Job Opportunities</Link>
            </div>
          </div>
          <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
          <a
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=J2RM9AGPDLDX6&ssrt=1728796488283"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f5c242] text-black px-6 py-2 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300"
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
