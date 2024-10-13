import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Lock, Unlock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'nmtsa2024') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5c242] to-[#0c2340] opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <Navbar />
        <main className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0c2340] mb-8">
              NMTSA Educational Resources
            </h1>
            <p className="text-xl text-gray-700 mb-12">
              Access exclusive training materials, research articles, and resources to enhance your understanding of Neurologic Music Therapy.
            </p>
          </motion.div>
          <motion.form 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl"
          >
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5c242] focus:border-transparent"
                  required
                />
                <Lock className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#f5c242] text-[#0c2340] px-4 py-3 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <Unlock className="mr-2" size={20} />
              Access Educational Content
            </button>
          </motion.form>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0c2340] mb-12 text-center"
        >
          NMTSA Educational Videos
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 space-y-12"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">NMTSA Clinic and Program Overview - Part 1</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/ED7KDmnzRKc?list=PL75805C2290AA9F45" 
                title="NMTSA Clinic and Program Overview - Part 1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">NMTSA Clinic and Program Overview - Part 2</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/dTMWgEFq5sU?list=PL75805C2290AA9F45" 
                title="NMTSA Clinic and Program Overview - Part 2" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">We Are NMTSA</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/5JR5RKCR_2s?list=PLvTsCZFtmTUGvhoEd_jwz_Xea9W4hFnNI" 
                title="We Are NMTSA" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </motion.section>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => setIsAuthenticated(false)}
          className="bg-[#0c2340] text-white px-6 py-3 rounded-md hover:bg-[#0a1c30] text-lg font-bold transition duration-300 mx-auto block"
        >
          Log Out
        </motion.button>
      </main>
    </div>
  );
}