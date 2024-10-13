import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0c2340] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Logo */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0 flex justify-center sm:justify-start">
            <Image src="/logo.png" alt="NMTSA Logo" width={100} height={100} className="w-auto h-auto max-h-20" />
          </div>

          {/* Social Media Icons */}
          <div className="w-full sm:w-1/4 flex justify-center space-x-4 mb-4 sm:mb-0">
            <a href="https://www.facebook.com/nmtsa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f5c242]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/your-channel-id" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f5c242]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="mailto:info@nmtsa.org" className="text-white hover:text-[#f5c242]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="tel:+16028406410" className="text-white hover:text-[#f5c242]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>

          {/* Email signup */}
          <div className="w-full sm:w-1/4">
            <h3 className="text-lg font-semibold mb-2 text-center sm:text-left">Sign up for updates</h3>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="px-3 py-2 text-sm text-black border border-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#f5c242] focus:border-[#f5c242] mb-2 sm:mb-0 w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-[#f5c242] text-[#0c2340] px-4 py-2 text-sm font-semibold rounded-r-md hover:bg-[#f3b51e] w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center mb-6 text-sm">
          <Link href="/our-programs" className="mx-2 my-1 hover:text-[#f5c242]">OUR PROGRAMS</Link>
          <Link href="/who-we-serve" className="mx-2 my-1 hover:text-[#f5c242]">WHO WE SERVE</Link>
          <Link href="/volunteer" className="mx-2 my-1 hover:text-[#f5c242]">VOLUNTEER</Link>
          <Link href="/donate" className="mx-2 my-1 hover:text-[#f5c242]">DONATE</Link>
          <Link href="/contact-us" className="mx-2 my-1 hover:text-[#f5c242]">CONTACT US</Link>
        </div>

        {/* Bottom section */}
        <div className="text-center text-sm border-t border-gray-600 pt-4">
          <p>3221 N 16th Street, Suite 201, Phoenix, AZ 85016 | (602) 840-6410</p>
          <p>&copy; 2024 NMTSA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
