import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800" id="our-story">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-[#f5c242]">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We see a world where every individual with a disability can unlock their full potential, shaping their future with confidence and ability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image src="/vision.jpg" alt="Our Vision" width={500} height={300} className="rounded-lg shadow-md" />
            </motion.div>
          </div>
        </section>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image src="/ourstory.webp" alt="Our Mission" width={500} height={300} className="rounded-lg shadow-md" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-[#f5c242]">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We partner with individuals affected by disabilities, harnessing the brain's response to music to build stronger connections between the mind and body.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold text-[#f5c242]">What We Believe</h2>
            <ul className="list-disc space-y-4 text-gray-700 mx-auto text-left md:max-w-2xl">
              <li className="text-lg">Everyone has the capacity to grow, succeed, and reach their full potential.</li>
              <li className="text-lg">Competence is inherent in every individual, regardless of disability.</li>
              <li className="text-lg">Each person brings unique contributions that enrich our world.</li>
              <li className="text-lg">Science and human connection together drive transformation.</li>
            </ul>
          </motion.div>
        </section>

        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold text-[#f5c242]">Our Story</h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed md:max-w-3xl mx-auto">
                Since 1982, Neurologic Music Therapy Services of Arizona (NMTSA) has been a beacon of hope, providing transformative services for individuals with neurologic impairments across all ages. We empower families and individuals to achieve breakthroughs using science-backed therapies rooted in music.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed md:max-w-3xl mx-auto">
                Our team collaborates with top researchers and clinicians worldwide to stay at the forefront of innovation, ensuring the highest quality care and outcomes. NMTSA's evidence-based approach is especially renowned for its work with autism and other neurological conditions.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="flex justify-center space-x-4">
          <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=J2RM9AGPDLDX6&ssrt=1728796488283" target="_blank" rel="noopener noreferrer" className="bg-[#f5c242] text-black px-8 py-3 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300">
            Donate
          </a>
          <Link href="/volunteer" className="bg-[#f5c242] text-black px-8 py-3 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300">
            Volunteer
          </Link>
        </section>
      </main>

      <footer className="bg-gray-100 mt-24 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-2">© 2024 Neurologic Music Therapy Services of Arizona. All rights reserved.</p>
          <p className="text-gray-600">3221 N 16th Street, Suite 201, Phoenix, AZ 85016 | (602) 840-6410 | info@nmtsa.org</p>
        </div>
      </footer>
    </div>
  );
};

export default OurStoryPage;
