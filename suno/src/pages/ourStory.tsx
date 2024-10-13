import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header - Same as Landing Page */}
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
            <Link href="/">
              <Image src="/logo.png" alt="NMTSA Logo" width={240} height={96} className="w-auto h-20 cursor-pointer" />
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-black text-base font-semibold hover:text-yellow-500 transition-colors">
                Home
              </Link>
              <Link href="/our-work" className="text-black text-base font-semibold hover:text-yellow-500 transition-colors">
                Our Work
              </Link>
              <Link href="/reports" className="text-black text-base font-semibold hover:text-yellow-500 transition-colors">
                Reports & Resources
              </Link>
              <Link href="/how-to-help" className="text-black text-base font-semibold hover:text-yellow-500 transition-colors">
                How to Help
              </Link>
              <Link href="/about-us" className="text-black text-base font-semibold hover:text-yellow-500 transition-colors">
                About Us
              </Link>
              <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=J2RM9AGPDLDX6&ssrt=1728796488283" target='_blank' rel="noopener noreferrer" className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors font-bold text-lg uppercase">
                Donate
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 space-y-16">
        {/* Our Vision and Our Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Vision (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-yellow-500">Our Vision</h2>
            <p className="text-lg text-gray-800">
              Unleashing the unique potential of individuals with disabilities.
            </p>
          </motion.div>

          {/* Our Mission (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-yellow-500">Our Mission</h2>
            <p className="text-lg text-gray-800">
              NMTSA partners with those impacted by disability to change lives through using the brain’s response to
              music, and optimizing body and brain connections. NMTSA assumes the competence of all.
            </p>
          </motion.div>
        </div>

        {/* NMTSA Beliefs Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-yellow-500">NMTSA Believes in...</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li className="text-lg">The capability of all people to reach their goals and attain their full potential.</li>
            <li className="text-lg">The competence of all people.</li>
            <li className="text-lg">The valuable contribution every person has to offer through their unique person and abilities.</li>
            <li className="text-lg">The connection of science and relationship, and the impact both have on every person.</li>
          </ul>
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-yellow-500">Our Story</h2>
          <p className="text-lg text-gray-800">
            Neurologic Music Therapy Services of Arizona’s (NMTSA) vision is to unleash the unique potential of individuals with disabilities. NMTSA has provided services to persons with neurologic impairments (ages 18 months to 75+ years of age) and their families in the greater Phoenix area since 1982.
          </p>
          <p className="text-lg text-gray-800">
            NMTSA is nationally recognized for its evidence-based approach to treatment with persons with neurological impairments, and individuals with autism specifically. NMTSA and its staff maintain close relationships with clinical and research staff from around the world (with emphasis in NMT, competency-based communication, inclusion, and cognitive-motor disorders) in order to remain current with best practice approaches for the individuals served.
          </p>
        </motion.div>
      </div>

      {/* Bottom Donate and Volunteer Buttons */}
      <div className="py-10">
        <div className="container mx-auto flex justify-center space-x-4">
          <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=J2RM9AGPDLDX6&ssrt=1728796488283" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors font-bold text-lg uppercase">
            Donate
          </a>
          <Link href="/volunteer" className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors font-bold text-lg uppercase">
            Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
