import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

const services = [
  {
    id: 'general',
    image: '/service-pediatric.jpg',
    label: 'General Dentistry',
    title: 'Comprehensive General Dentistry',
    desc: 'Your foundation for a lifetime of healthy teeth starts here. We provide complete preventive and restorative care for patients of all ages — from toddlers to seniors.',
    details: 'Our general dentistry services cover everything from bi-annual cleanings and digital X-rays to fillings, extractions, root canals, and emergency care. We build long-term relationships with our patients to track their dental health over time.',
    features: ['Routine exams & cleanings', 'Digital X-rays', 'Composite fillings', 'Tooth extractions', 'Root canal therapy', 'Emergency dental care', 'Pediatric dentistry', 'Gum disease treatment'],
  },
  {
    id: 'implants',
    image: '/service-implants.jpg',
    label: 'Dental Implants',
    title: 'Permanent Dental Implant Solutions',
    desc: 'Replace missing teeth with titanium implants that look, feel, and function just like natural teeth. Dr. Frost is an experienced implant surgeon with a proven track record.',
    details: 'Dental implants involve placing a titanium screw into the jawbone to act as an artificial root. A ceramic crown is then attached on top. The result is a permanent, natural-looking tooth that prevents bone loss and restores full function.',
    features: ['Single tooth implants', 'Multiple tooth implants', 'Implant-supported bridges', 'Bone grafting', 'Sinus lifts', 'Immediate load implants', 'Implant maintenance', 'Typically not a painful procedure'],
  },
  {
    id: 'cosmetic',
    image: '/service-cosmetic.jpg',
    label: 'Cosmetic Dentistry',
    title: 'Transform Your Smile Aesthetically',
    desc: 'From simple whitening to complete aesthetic transformations, we help you achieve the beautiful, confident smile you\'ve always wanted.',
    details: 'Cosmetic dentistry combines artistry with advanced techniques to address imperfections like discoloration, chips, gaps, and misalignment. Every cosmetic treatment is customized to complement your facial features and desired outcome.',
    features: ['Professional teeth whitening', 'Porcelain veneers', 'Dental bonding', 'Tooth contouring', 'Gum contouring', 'Composite veneers', 'Enamel shaping', 'Complete smile design'],
  },
  {
    id: 'allon4',
    image: '/service-implants.jpg',
    label: 'All-On-4',
    title: 'All-On-4 Permanent Teeth Solutions',
    desc: 'Restore a full arch of teeth using just four strategically placed implants. A revolutionary solution for patients who have lost most or all of their teeth.',
    details: 'All-On-4 uses four implants placed at precise angles to support a full arch of permanent, fixed teeth. Unlike traditional dentures, All-On-4 prosthetics are non-removable, look completely natural, and restore nearly full chewing function. Many patients receive their new teeth the same day.',
    features: ['Full arch restoration', 'Same-day teeth in many cases', 'No denture adhesives needed', 'Prevents bone resorption', 'Natural look and feel', 'Long-lasting results', 'Upper & lower arch options', 'Improved nutrition & confidence'],
  },
  {
    id: 'makeovers',
    image: '/service-cosmetic.jpg',
    label: 'Smile Makeovers',
    title: 'Complete Smile Makeover Treatments',
    desc: 'A smile makeover combines multiple cosmetic and restorative procedures to completely transform your appearance and self-confidence.',
    details: 'We evaluate your facial structure, skin tone, and personal goals to design a fully customized smile. Treatments may include whitening, veneers, implants, gum contouring, and orthodontics — all coordinated for a cohesive, stunning result.',
    features: ['Personalized smile design', 'Porcelain veneer placement', 'Professional whitening', 'Orthodontic coordination', 'Gum reshaping', 'Crown & bridge work', 'Implant integration', 'Before & after planning'],
  },
  {
    id: 'preventive',
    image: '/service-pediatric.jpg',
    label: 'Preventive Care',
    title: 'Preventive Dental Care for Life',
    desc: 'The best dental treatment is the kind you never need. Our preventive care programs keep your teeth healthy and catch small problems before they become big ones.',
    details: 'We emphasize patient education and proactive care. Regular cleanings remove plaque and tartar buildup, while periodic X-rays and screenings detect cavities, gum disease, and other conditions early — saving you time, money, and discomfort.',
    features: ['Professional cleanings', 'Fluoride treatments', 'Dental sealants', 'Oral cancer screenings', 'Night guards & sports guards', 'Bite analysis', 'Nutritional counseling', 'At-home care guidance'],
  },
  {
    id: 'restorative',
    image: '/service-invisalign.jpg',
    label: 'Restorative Dentistry',
    title: 'Restorative Treatments That Last',
    desc: 'Damaged, decayed, or missing teeth can be fully restored to health and beauty. Our restorative treatments bring back function, comfort, and confidence.',
    details: 'Whether you need a single tooth repaired or a full-mouth reconstruction, our restorative dentistry solutions use the latest materials and techniques to deliver durable, natural-looking results that stand the test of time.',
    features: ['Dental crowns', 'Dental bridges', 'Inlays & onlays', 'Composite fillings', 'Dentures & partials', 'Full-mouth reconstruction', 'Cracked tooth repair', 'Worn enamel treatment'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="pt-[74px]" style={{ background: 'linear-gradient(135deg,#082840 0%,#1a6b8a 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 text-center">
          <div className="flex justify-center gap-2 mb-4 text-sm text-white/55">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80">Services</span>
          </div>
          <h1 className="animate-fade-up delay-100 text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">Our Dental Services</h1>
          <p className="animate-fade-up delay-200 text-white/75 text-lg max-w-xl mx-auto">Providing care for all of your dental needs — from routine cleanings to complete smile transformations.</p>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className="py-14 border-b border-border last:border-none"
          style={{ background: i % 2 === 1 ? '#f7fbfd' : '#fff' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              {/* Service image */}
              <div style={{ direction: 'ltr' }}>
                <FadeIn direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className="relative h-64 sm:h-80 lg:h-90 rounded-2xl overflow-hidden shadow-xl group card-glow">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary-dark/40 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold text-primary uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {svc.label}
                  </span>
                </div>
                </FadeIn>
              </div>

              {/* Text */}
              <FadeIn direction={i % 2 === 0 ? 'left' : 'right'} delay={150}>
              <div style={{ direction: 'ltr' }}>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-gradient mb-2">{svc.label}</span>
                <h2 className="text-content mb-4">{svc.title}</h2>
                <p className="text-muted leading-relaxed mb-4">{svc.desc}</p>
                <p className="text-muted leading-relaxed mb-6">{svc.details}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#2dbfaa" strokeWidth={2.5} className="w-4 h-4 flex-shrink-0">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                >
                  Book a Consultation
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-14 text-center" style={{ background: 'linear-gradient(135deg,#2dbfaa 0%,#1a6b8a 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-white mb-4">Not Sure Which Service Is Right for You?</h2>
          <p className="text-white/80 text-lg mb-8">Schedule a free consultation and our team will help you find the best treatment path for your smile goals.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-primary-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-sm">
              Book a Free Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="tel:+16417432314" className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-sm">
              Call (641) 743-2314
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
