import Image from 'next/image'
import { ArrowRight, Music, Brain, Users } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function NMTSALandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 pr-8">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                UNLEASHING POTENTIAL THROUGH MUSIC THERAPY
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Serving individuals with neurologic impairments and differences since 1982.
              </p>
              <a href="#" className="inline-block bg-[#f5c242] text-black px-8 py-3 rounded-md hover:bg-[#e5b232] text-lg font-bold transition duration-300">
                Discover Our Impact
              </a>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <Image src="/nmtsa1.webp" alt="NMTSA therapy session 1" width={300} height={300} className="rounded-lg shadow-md" />
              <Image src="/nmtsa2.webp" alt="NMTSA therapy session 2" width={300} height={300} className="rounded-lg shadow-md" />
              <Image src="/nmtsa3.webp" alt="NMTSA therapy session 3" width={300} height={300} className="rounded-lg shadow-md" />
              <Image src="/nmtsa3.jpeg" alt="NMTSA therapy session 4" width={300} height={300} className="rounded-lg shadow-md" />
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-12 mb-24">
          {[
            { icon: Music, title: "EVIDENCE-BASED APPROACH", description: "Utilizing standardized, research-based techniques to treat the brain using specific elements of music." },
            { icon: Brain, title: "SPECIALIZED THERAPY", description: "Addressing non-musical goals such as speech, physical movement, and cognition through music therapy." },
            { icon: Users, title: "DIVERSE CLIENTELE", description: "Serving individuals aged 18 months to 90+ years with various neurologic impairments and differences." }
          ].map((item, index) => (
            <div key={index} className="text-center bg-gray-50 p-8 rounded-lg shadow-sm">
              <item.icon className="w-16 h-16 mx-auto mb-6 text-[#f5c242]" />
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
              <a href="#" className="text-[#f5c242] hover:text-[#e5b232] font-semibold flex items-center justify-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </section>

        <section className="bg-[#f5c242] rounded-lg shadow-lg p-12 mb-24">
          <h2 className="text-4xl font-bold mb-6 text-black">
            NEUROLOGIC MUSIC THERAPY (NMT)®
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Neurologic Music Therapy is an evidence-based treatment system that uses standardized, research-based techniques to treat the brain using specific elements of music such as rhythm, melody, dynamics, tempo, etc. Our therapists are stimulus specialists trained in the neuroscience of music perception, production, and cognition.
          </p>
          <a href="#" className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 text-lg font-bold transition duration-300">
            Discover NMT
          </a>
        </section>

        <section className="grid md:grid-cols-3 gap-12">
          {[
            { number: "40+", title: "YEARS OF SERVICE", description: "Providing neurologic music therapy services in the greater Phoenix area since 1982" },
            { number: "3/4", title: "STAR RATING", description: "Recognized by Charity Navigator for our commitment to transparency and impact" },
            { number: "ALL AGES", title: "SERVED", description: "Offering specialized therapy for individuals from 18 months to 90+ years of age" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-4 text-[#f5c242]">{item.number}</div>
              <div className="text-xl font-semibold mb-4">{item.title}</div>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-100 mt-24 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-2">© 2024 Neurologic Music Therapy Services of Arizona. All rights reserved.</p>
          <p className="text-gray-600">3221 N 16th Street, Suite 201, Phoenix, AZ 85016 | (602) 840-6410 | info@nmtsa.org</p>
        </div>
      </footer>
    </div>
  )
}
