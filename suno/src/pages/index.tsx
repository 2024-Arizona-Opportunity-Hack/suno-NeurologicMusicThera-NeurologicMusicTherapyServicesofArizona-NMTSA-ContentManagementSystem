import Image from 'next/image'
import { ArrowRight, Music, Brain, Users, Home, School, Hospital, Clock, Award, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NMTSALandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="container mx-auto px-4 py-8 sm:py-12">
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-24"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
                UNLEASHING POTENTIAL THROUGH MUSIC THERAPY
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-6 sm:mb-10">
                Serving individuals with neurologic impairments and differences since 1982.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=J2RM9AGPDLDX6&ssrt=1728796488283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f5c242] text-black px-6 py-3 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300 text-center"
                >
                  DONATE
                </a>
                <a
                  href="#volunteer"
                  className="bg-[#0c2340] text-white px-6 py-3 rounded-md hover:bg-[#0a1c30] text-lg font-bold transition duration-300 text-center"
                >
                  VOLUNTEER
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 sm:gap-6 mt-8 md:mt-0">
              <Image src="/nmtsa1.webp" alt="NMTSA therapy session 1" width={400} height={400} className="rounded-lg w-full h-auto" />
              <Image src="/nmtsa2.webp" alt="NMTSA therapy session 2" width={400} height={400} className="rounded-lg w-full h-auto" />
              <Image src="/nmtsa3.webp" alt="NMTSA therapy session 3" width={400} height={400} className="rounded-lg w-full h-auto" />
              <Image src="/nmtsa3.jpeg" alt="NMTSA therapy session 4" width={400} height={400} className="rounded-lg w-full h-auto" />
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-12 mb-24"
        >
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <Music className="w-16 h-16 mx-auto mb-6 text-[#f5c242]" />
            <h2 className="text-3xl font-bold mb-4">EVIDENCE-BASED APPROACH</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Utilizing standardized, research-based techniques to treat the brain using specific elements of music. Our therapists are stimulus specialists trained in the neuroscience of music perception, production, and cognition.
            </p>
            <a href="#" className="text-[#f5c242] hover:text-[#e5b232] flex items-center justify-center text-lg font-semibold">
              Our Techniques <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <Brain className="w-16 h-16 mx-auto mb-6 text-[#f5c242]" />
            <h2 className="text-3xl font-bold mb-4">SPECIALIZED THERAPY</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Addressing non-musical goals such as speech, physical movement, and cognition through music therapy. We serve individuals with various conditions, including autism, traumatic brain injury, developmental disabilities, and more.
            </p>
            <a href="#" className="text-[#f5c242] hover:text-[#e5b232] flex items-center justify-center text-lg font-semibold">
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <Users className="w-16 h-16 mx-auto mb-6 text-[#f5c242]" />
            <h2 className="text-3xl font-bold mb-4">DIVERSE CLIENTELE</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Serving individuals aged 18 months to 90+ years with various neurologic impairments and differences. Our clients include those with cerebral palsy, Down syndrome, stroke, Parkinson's disease, and more.
            </p>
            <a href="#" className="text-[#f5c242] hover:text-[#e5b232] flex items-center justify-center text-lg font-semibold">
              Our Impact <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#f5c242] rounded-lg shadow-lg p-12 mb-24"
        >
          <div className="text-black mb-2 text-xl">NEUROLOGIC MUSIC THERAPY (NMT)®</div>
          <h2 className="text-4xl font-bold mb-6 text-black">
            TRANSFORMING LIVES THROUGH THE POWER OF MUSIC
          </h2>
          <div className="w-32 h-1 bg-black mb-8"></div>
          <p className="text-black mb-8 text-xl leading-relaxed">
            Neurologic Music Therapy is an evidence-based treatment system that uses standardized, research-based techniques to treat the brain using specific elements of music such as rhythm, melody, dynamics, tempo, etc. NMTSA was the first private organization to provide music therapy services in Phoenix and established the first NMT clinic in the United States.
          </p>
          <a href="#" className="text-black hover:text-gray-800 flex items-center text-xl font-semibold">
            Discover NMT <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-12 mb-24"
        >
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <Clock className="w-16 h-16 mx-auto mb-6 text-[#f5c242]" />
            <div className="text-5xl font-bold mb-4">40+</div>
            <div className="text-[#f5c242] mb-4 text-2xl font-semibold">YEARS OF SERVICE</div>
            <p className="text-gray-700 text-lg">
              Providing neurologic music therapy services in the greater Phoenix area since 1982
            </p>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <Award className="w-16 h-16 mx-auto mb-6 text-[#f5c242]" />
            <div className="text-5xl font-bold mb-4">MT-BC</div>
            <div className="text-[#f5c242] mb-4 text-2xl font-semibold">CERTIFIED THERAPISTS</div>
            <p className="text-gray-700 text-lg">
              All our therapists hold national certification and maintain Fellowship status with the Academy of Neurologic Music Therapy
            </p>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <Heart className="w-16 h-16 mx-auto mb-6 text-[#f5c242]" />
            <div className="text-5xl font-bold mb-4">ALL AGES</div>
            <div className="text-[#f5c242] mb-4 text-2xl font-semibold">SERVED</div>
            <p className="text-gray-700 text-lg">
              Offering specialized therapy for individuals from 18 months to 90+ years of age
            </p>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">OUR SERVICES AND FACILITIES</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Home className="w-16 h-16 mb-6 text-[#f5c242]" />
              <h3 className="text-2xl font-semibold mb-4">In-Clinic</h3>
              <p className="text-center text-gray-700">
                Specially designed clinic space with eight individual therapy rooms, a large group room, and a recording studio.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <School className="w-16 h-16 mb-6 text-[#f5c242]" />
              <h3 className="text-2xl font-semibold mb-4">Schools</h3>
              <p className="text-center text-gray-700">
                Providing therapy services in educational settings to support students' learning and development.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Hospital className="w-16 h-16 mb-6 text-[#f5c242]" />
              <h3 className="text-2xl font-semibold mb-4">Hospitals & Rehab Centers</h3>
              <p className="text-center text-gray-700">
                Offering therapy in medical settings to aid in recovery and rehabilitation processes.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
