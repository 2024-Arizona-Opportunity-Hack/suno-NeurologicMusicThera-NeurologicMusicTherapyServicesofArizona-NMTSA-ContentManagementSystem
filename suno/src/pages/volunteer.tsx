import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* Top Section with Text and Image */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#f5c242] mb-4">
                VOLUNTEER
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Get Involved! NMTSA needs your help! Volunteers are needed in all aspects of our program offerings.
                Volunteering at NMTSA can take the form of helping with office work, cleaning instruments, sitting on
                a parent or fundraising committee, assisting with grant writing, donating a unique service, or any other way
                you can lend a hand.
              </p>
            </div>

            {/* Image on the Right with medium size */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
              <img
                src="/volunteer.webp" // Make sure this path is correct
                alt="Volunteer"
                className="rounded-lg shadow-lg w-64 h-auto"  // Medium size with w-64
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0c2340] text-white px-6 py-3 rounded-md hover:bg-[#0a1c30] text-lg font-bold transition duration-300"
            >
              <a href="mailto:info@nmtso.org" className="block text-center">
                SIGN UP NOW
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Other Sections */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">How You Can Help</h2>
            <p className="text-gray-700 mb-4">
              Volunteers are needed for office work, cleaning instruments, helping with committees, and more.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Support Programs</h2>
            <p className="text-gray-700 mb-4">
              Assisting with grant writing, fundraising, or donating unique services makes a huge difference.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Be Part of the Community</h2>
            <p className="text-gray-700 mb-4">
              Engage with our community and help us make a lasting impact on the lives of those we serve.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#f5c242] rounded-lg shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">
            APPLY TO VOLUNTEER
          </h2>
          <p className="text-black mb-6">
            To apply to be an NMTSA volunteer, please download and complete the 
            <a 
              href="https://www.nmtsa.org/volunteer-application" 
              className="text-[#0c2340] hover:text-[#0a1c30] font-bold"
              target="_blank"
              rel="noopener noreferrer"
            > volunteer application (click me)</a>. You can also email us directly to begin the conversation about how you can best contribute.
          </p>
          <a href="mailto:info@nmtso.org" className="text-black hover:text-gray-800 flex items-center">
            Email Us <motion.div whileHover={{ scale: 1.1 }}>&rarr;</motion.div>
          </a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-[#f5c242] mb-2">VOLUNTEERS</div>
            <p className="text-gray-700">
              Join our growing community of volunteers and make a difference.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-[#f5c242] mb-2">HOURS CONTRIBUTED</div>
            <p className="text-gray-700">
              Our volunteers have dedicated countless hours to support our mission.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">ALL AGES</div>
            <div className="text-[#f5c242] mb-2">ARE WELCOME</div>
            <p className="text-gray-700">
              We welcome volunteers of all ages, helping people from different walks of life.
            </p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
