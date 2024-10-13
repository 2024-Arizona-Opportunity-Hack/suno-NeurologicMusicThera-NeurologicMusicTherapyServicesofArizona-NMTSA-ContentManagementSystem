import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="bg-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image src="/logo.png" alt="NMTSA Logo" width={200} height={70} className="w-auto h-auto" />
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="text-black hover:text-gray-700 text-lg font-semibold">ABOUT</Link>
          <Link href="#" className="text-black hover:text-gray-700 text-lg font-semibold">SERVICES</Link>
          <Link href="#" className="text-black hover:text-gray-700 text-lg font-semibold">RESOURCES</Link>
          <Link href="#" className="text-black hover:text-gray-700 text-lg font-semibold">CONTACT</Link>
        </nav>
        <div className="relative">
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
