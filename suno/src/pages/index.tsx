import Image from 'next/image'
import { ArrowRight, Music, Brain, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NMTSALandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                UNLEASHING POTENTIAL THROUGH MUSIC THERAPY
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Serving individuals with neurologic impairments and differences since 1982.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=J2RM9AGPDLDX6&ssrt=1728796488283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f5c242] text-black px-6 py-3 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300"
                >
                  DONATE
                </a>
                <a
                  href="#volunteer"  // Replace with actual volunteer page link
                  className="bg-[#0c2340] text-white px-6 py-3 rounded-md hover:bg-[#0a1c30] text-lg font-bold transition duration-300"
                >
                  VOLUNTEER
                </a>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <Image src="/nmtsa1.webp" alt="NMTSA therapy session 1" width={300} height={300} className="rounded-lg" />
              <Image src="/nmtsa2.webp" alt="NMTSA therapy session 2" width={300} height={300} className="rounded-lg" />
              <Image src="/nmtsa3.webp" alt="NMTSA therapy session 3" width={300} height={300} className="rounded-lg" />
              <Image src="/nmtsa3.jpeg" alt="NMTSA therapy session 4" width={300} height={300} className="rounded-lg" />
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <Music className="w-12 h-12 mx-auto mb-4 text-[#f5c242]" />
            <h2 className="text-2xl font-bold mb-2">EVIDENCE-BASED APPROACH</h2>
            <p className="text-gray-700 mb-4">
              Utilizing standardized, research-based techniques to treat the brain using specific elements of music.
            </p>
            <a href="#" className="text-[#f5c242] hover:text-[#e5b232] flex items-center justify-center">
              Our Techniques <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div className="text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-[#f5c242]" />
            <h2 className="text-2xl font-bold mb-2">SPECIALIZED THERAPY</h2>
            <p className="text-gray-700 mb-4">
              Addressing non-musical goals such as speech, physical movement, and cognition through music therapy.
            </p>
            <a href="#" className="text-[#f5c242] hover:text-[#e5b232] flex items-center justify-center">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-[#f5c242]" />
            <h2 className="text-2xl font-bold mb-2">DIVERSE CLIENTELE</h2>
            <p className="text-gray-700 mb-4">
              Serving individuals aged 18 months to 90+ years with various neurologic impairments and differences.
            </p>
            <a href="#" className="text-[#f5c242] hover:text-[#e5b232] flex items-center justify-center">
              Our Impact <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#f5c242] rounded-lg shadow-lg p-8 mb-16"
        >
          <div className="text-black mb-2">NEUROLOGIC MUSIC THERAPY (NMT)®</div>
          <h2 className="text-3xl font-bold mb-4 text-black">
            TRANSFORMING LIVES THROUGH THE POWER OF MUSIC
          </h2>
          <div className="w-24 h-1 bg-black mb-6"></div>
          <p className="text-black mb-6">
            Neurologic Music Therapy is an evidence-based treatment system that uses standardized, research-based techniques to treat the brain using specific elements of music such as rhythm, melody, dynamics, tempo, etc. Our therapists are stimulus specialists trained in the neuroscience of music perception, production, and cognition.
          </p>
          <a href="#" className="text-black hover:text-gray-800 flex items-center">
            Discover NMT <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">40+</div>
            <div className="text-[#f5c242] mb-2">YEARS OF SERVICE</div>
            <p className="text-gray-700">
              Providing neurologic music therapy services in the greater Phoenix area since 1982
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">3/4</div>
            <div className="text-[#f5c242] mb-2">STAR RATING</div>
            <p className="text-gray-700">
              Recognized by Charity Navigator for our commitment to transparency and impact
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">ALL AGES</div>
            <div className="text-[#f5c242] mb-2">SERVED</div>
            <p className="text-gray-700">
              Offering specialized therapy for individuals from 18 months to 90+ years of age
            </p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
