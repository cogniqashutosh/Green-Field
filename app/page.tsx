import Link from 'next/link'
import Image from 'next/image'
import StatCounter from '@/components/StatCounter'
import FadeIn from '@/components/FadeIn'

const services = [
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.8 1.3 3.8L5 20h14l-2.3-9.2C17.5 9.8 18 8.5 18 7c0-2.5-2.5-5-6-5z" /></svg>,
    title: 'General Dentistry',
    desc: 'Routine cleanings, exams, fillings, and complete oral health maintenance for the whole family.',
    href: '/services#general',
    featured: false,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /></svg>,
    title: 'Dental Implants',
    desc: 'Permanent titanium implants that look, feel, and function just like natural teeth.',
    href: '/services#implants',
    featured: true,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm1 14h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" /></svg>,
    title: 'Cosmetic Dentistry',
    desc: 'Teeth whitening, veneers, bonding, and complete aesthetic smile transformations.',
    href: '/services#cosmetic',
    featured: false,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" /></svg>,
    title: 'Smile Makeovers',
    desc: 'Comprehensive smile redesign combining multiple treatments for a stunning transformation.',
    href: '/services#makeovers',
    featured: false,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" /></svg>,
    title: 'All-On-4 Implants',
    desc: 'Full-arch permanent teeth replacement using just four strategically placed implants.',
    href: '/services#allon4',
    featured: false,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>,
    title: 'Preventive Care',
    desc: 'Regular check-ups, cleanings, and education to prevent dental problems before they start.',
    href: '/services#preventive',
    featured: false,
  },
]

const why = [
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
    title: 'Experienced Providers',
    desc: 'Dr. Ryan Frost and Dr. Erin Johnson bring advanced training in implants, cosmetics, and full-mouth rehabilitation.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" /></svg>,
    title: 'Patient-Centered Care',
    desc: 'A warm, welcoming team dedicated to making every visit comfortable, stress-free, and personalized.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>,
    title: 'Whole-Body Approach',
    desc: 'Our whole-body dentistry philosophy connects oral health to your overall wellness for better outcomes.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z" /></svg>,
    title: 'Advanced Technology',
    desc: 'Modern equipment and latest dental techniques for accurate diagnoses and comfortable treatments.',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    initial: 'S',
    text: "Dr. Frost and his team are absolutely wonderful. The office is beautiful, the staff is friendly, and I've never felt more comfortable at a dental appointment. Highly recommend!",
    service: 'General Dentistry',
  },
  {
    name: 'James T.',
    initial: 'J',
    text: 'I got All-On-4 implants and the results are life-changing. I can eat, smile, and laugh with complete confidence again. The whole team was supportive through every step.',
    service: 'All-On-4 Implants',
  },
  {
    name: 'Linda K.',
    initial: 'L',
    text: "My smile makeover exceeded every expectation. Dr. Frost has a true artist's eye. The before-and-after difference is incredible and the whole experience was so comfortable.",
    service: 'Smile Makeover',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-screen flex items-center pt-[74px] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #082840 0%, #1a6b8a 50%, #2dbfaa 100%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        {/* Animated blobs */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none animate-blob"
          style={{ background: 'radial-gradient(circle at 40% 40%, rgba(45,191,170,0.35) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none animate-blob"
          style={{ background: 'radial-gradient(circle at 40% 40%, rgba(26,107,138,0.3) 0%, transparent 70%)', animationDelay: '4s' }} />
        <div className="absolute top-1/3 left-2/3 w-75 h-75 rounded-full pointer-events-none animate-blob"
          style={{ background: 'radial-gradient(circle at 40% 40%, rgba(109,232,213,0.18) 0%, transparent 70%)', animationDelay: '2s' }} />

        {/* Large logo background watermark — desktop only */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 pointer-events-none select-none" style={{ right: '85px' }} aria-hidden>
          <Image src="/logo.png" alt="" width={750} height={650}
            className="w-[600px] h-auto opacity-[1.45] brightness-0 invert " />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text — staggered load animations */}
            <div>
              <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-white/12 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-white/90 tracking-wider mb-6">
                <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse-ring" />
                Greenfield, Iowa&apos;s Trusted Dental Practice
              </div>
              <h1 className="animate-fade-up delay-200 text-white mb-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Healthy Smiles<br />
                <span style={{ color: '#6de8d5' }}>Lasting Confidence</span>
              </h1>
              <p className="animate-fade-up delay-300 text-white/78 text-lg leading-relaxed mb-10 max-w-lg">
                Comprehensive dental care, cosmetic dentistry, and advanced implant solutions
                designed to improve both your smile and overall well-being
              </p>
              <div className="animate-fade-up delay-400 flex flex-wrap gap-3 mb-12">
                <Link href="/contact" className="animate-pulse-ring inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-primary-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-sm">
                  Book Appointment
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 bg-white/12 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-all duration-200 text-sm">
                  Our Services
                </Link>
              </div>
              <div className="animate-fade-up delay-500">
                <StatCounter />
              </div>
            </div>

            {/* Logo showcase */}
            <div className="animate-fade-up delay-300 relative hidden lg:flex justify-center items-center min-h-115">
              {/* Radial glow */}
              <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(45,191,170,0.9) 0%, transparent 70%)' }} />

              {/* Decorative rings */}
              <div className="absolute w-[420px] h-[420px] rounded-full border border-white/8 animate-spin-slow pointer-events-none" />
              <div className="absolute w-[320px] h-[320px] rounded-full border border-white/12 pointer-events-none" />
              <div className="absolute w-[220px] h-[220px] rounded-full border border-white/18 pointer-events-none" />


              {/* Badge: Same-Day */}
              <div className="animate-float-alt absolute top-6 -right-2 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3" style={{ animationDelay: '0.8s' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(45,191,170,0.15)' }}>
                  <svg viewBox="0 0 24 24" fill="#2dbfaa" className="w-5 h-5"><path d="M20 6L9 17l-5-5 1.41-1.41L9 14.17 18.59 4.59 20 6z" /></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-content">Same-Day Consults</div>
                  <div className="text-[0.65rem] text-subtle">Available most days</div>
                </div>
              </div>

              {/* Badge: Award */}
              <div className="animate-float absolute bottom-6 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3" style={{ animationDelay: '1.8s', animationDuration: '5s' }}>
                <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="#1a6b8a" className="w-5 h-5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-content">Trusted Since 2006</div>
                  <div className="text-[0.65rem] text-subtle">Award-winning care</div>
                </div>
              </div>

              {/* Badge: Patients */}
              <div className="animate-float-alt absolute bottom-20 -right-6 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3" style={{ animationDelay: '1.2s' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-yellow-50">
                  <svg viewBox="0 0 24 24" fill="#f59e0b" className="w-5 h-5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-content">3,000+ Patients</div>
                  <div className="text-[0.65rem] text-subtle">And growing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-primary-dark py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {['General & Cosmetic Dentistry', 'Dental Implant Specialists', 'Invisalign Provider', 'Whole-Body Approach', 'Accepting New Patients'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-white/85">
                <svg viewBox="0 0 24 24" fill="#2dbfaa" className="w-4 h-4 flex-shrink-0"><path d="M20 6L9 17l-5-5 1.41-1.41L9 14.17 18.59 4.59 20 6z" /></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" className="relative">
              <div className="relative h-72 md:h-96 lg:h-115 rounded-2xl overflow-hidden shadow-xl card-glow">
                <Image src="/office-lobby-new.png" alt="Greenfield Dental Office" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl text-center">
                <div className="text-3xl font-extrabold text-primary">20+</div>
                <div className="text-xs text-muted mt-1">Years of Excellence</div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={150}>
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-gradient mb-2">About Us</span>
              <h2 className="text-content mb-4">Caring for Greenfield Since 2006</h2>
              <p className="text-muted leading-relaxed mb-5">
                Greenfield Dental is a full-service practice dedicated to your oral health and overall well-being.
                Led by Dr. Ryan Frost and Dr. Erin Johnson, our team takes a whole-body approach to dentistry —
                because a healthy smile is connected to a healthy life.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                From routine cleanings to full-mouth implant restorations, we deliver personalized care using
                the latest technology in a warm, welcoming environment.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {['Personalized treatment plans for every patient', 'Advanced implant and cosmetic solutions', 'Whole-body health philosophy', 'Caring, experienced team of 10+ professionals'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(45,191,170,0.15)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#2dbfaa" strokeWidth={3} className="w-3 h-3"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm">
                Meet Our Team
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-14 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-gradient mb-2">What We Offer</span>
            <h2 className="text-content mb-4">Comprehensive Dental Services</h2>
            <p className="text-muted max-w-xl mx-auto">From your first cleaning to a complete smile transformation — we have the expertise to care for every dental need.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 80}>
              <Link
                href={svc.href}
                className="group relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden block h-full"
                style={svc.featured
                  ? { background: 'linear-gradient(145deg,#1a6b8a,#114f68)', borderColor: 'transparent' }
                  : { background: 'white', borderColor: '#ccdae4' }}
              >
                {!svc.featured && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ background: 'linear-gradient(90deg,#1a6b8a,#2dbfaa)' }} />
                )}
                <div className="w-13 h-13 rounded-xl flex items-center justify-center mb-5" style={{ width: 52, height: 52, background: svc.featured ? 'rgba(255,255,255,0.15)' : '#e6f3f8' }}>
                  <div style={{ color: svc.featured ? '#fff' : '#1a6b8a' }}>{svc.icon}</div>
                </div>
                <h3 className="font-bold mb-2" style={{ color: svc.featured ? '#fff' : '#0f2535' }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: svc.featured ? 'rgba(255,255,255,0.75)' : '#476070' }}>{svc.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: svc.featured ? '#6de8d5' : '#1a6b8a' }}>
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-7 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200 text-sm">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── SMILE TRANSFORMATION ── */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Before', src: '/tx-before-1.png', accent: false },
                { label: 'After', src: '/tx-after-1.png', accent: true },
                { label: 'Before', src: '/tx-before-2.png', accent: false },
                { label: 'After', src: '/tx-after-2.png', accent: true },
              ].map((item, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '220px' }}>
                  <Image src={item.src} alt={`Smile ${item.label}`} fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  <span className={`absolute bottom-3 left-3 text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${item.accent ? 'bg-accent text-white' : 'bg-white text-primary'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-2">Smile Transformations</span>
              <h2 className="text-content mb-4">We Create Smiles That Change Lives</h2>
              <p className="text-muted leading-relaxed mb-6">Whether it&apos;s a single tooth or a complete full-mouth restoration, our cosmetic and restorative treatments deliver stunning, natural-looking results.</p>
              <div className="flex flex-col gap-4">
                {[
                  { title: 'Smile Makeovers', desc: 'Custom combinations of veneers, whitening, and contouring.' },
                  { title: 'All-On-4 Implants', desc: 'Permanent full-arch teeth in as little as one day.' },
                  { title: 'Dental Veneers', desc: 'Ultra-thin porcelain shells for a flawless smile instantly.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start bg-surface rounded-xl p-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="#1a6b8a" className="w-5 h-5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-content text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/services#makeovers" className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm mt-7">
                Explore Smile Makeovers
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-14 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-gradient mb-2">Why Greenfield Dental</span>
            <h2 className="text-content mb-4">The Greenfield Difference</h2>
            <p className="text-muted max-w-xl mx-auto">We combine clinical excellence with genuine compassion to give you an experience unlike any other dental practice.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
              <div className="bg-white border border-border rounded-2xl p-7 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 card-glow h-full">
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-content mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14" style={{ background: 'linear-gradient(135deg,#114f68 0%,#1a6b8a 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-2">Patient Stories</span>
            <h2 className="text-white mb-3">What Our Patients Say</h2>
            <p className="text-white/65 max-w-xl mx-auto">Real experiences from real patients who trusted us with their smiles.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="text-gold text-lg mb-3">★★★★★</div>
                <p className="text-sm text-white/85 leading-relaxed mb-5">
                  <span className="text-accent text-xl font-black mr-0.5">&ldquo;</span>{t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white font-bold text-sm">{t.initial}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/45 text-xs">{t.service}</div>
                  </div>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://www.google.com/search?q=Greenfield+Dental+Greenfield+Iowa+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-content font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Read Our Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-14 text-center" style={{ background: 'linear-gradient(135deg,#2dbfaa 0%,#1a6b8a 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
          <h2 className="text-white mb-4">Ready for Your Best Smile?</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">New patients are always welcome. Schedule your appointment today and experience compassionate, comprehensive dental care.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-primary-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-sm">
              Book Your Appointment
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <a href="tel:+16417432314" className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all duration-200 text-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3-8.63A2 2 0 012 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.4a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              (641) 743-2314
            </a>
          </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
