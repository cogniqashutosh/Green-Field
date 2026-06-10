import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

const philosophy = [
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/></svg>,
    title: 'Patient-First Philosophy',
    desc: 'Every decision we make is guided by what is best for the patient. We listen carefully, explain options clearly, and respect your time and comfort throughout every visit.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    title: 'Clinical Excellence',
    desc: 'We invest in continuing education and the latest dental technology to ensure our patients always receive the highest standard of care available.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
    title: 'Community Commitment',
    desc: 'We are proud to serve Greenfield and the surrounding communities. Our team is deeply rooted in this region and committed to improving local oral health.',
  },
]

const team = [
  { name: 'Dr. Ryan Frost',  role: 'Owner & Lead Dentist',        photo: '/dr-frost.png',       bio: 'Born and raised in Waterloo, Iowa. Studied microbiology at University of Iowa and graduated from UI College of Dentistry. Certified Invisalign provider and experienced implant surgeon.' },
  { name: 'Dr. Erin Johnson', role: 'Dentist',                     photo: '/dr-johnson.png',     bio: 'From West Des Moines, Iowa. Earned BS in Kinesiology from Iowa State, graduated from UI College of Dentistry in 2016. Returned to Iowa in 2022.' },
  { name: 'Polly',            role: 'Front Office Administrator',  photo: '/team-polly.png',     bio: 'With Greenfield Dental since 2006. Manages scheduling, insurance, and office technology. The friendly voice you hear when you call.' },
  { name: 'Shawna',           role: 'Front Office Administrator',  photo: '/team-shawna.png',    bio: 'Originally from Winterset. Business Administration graduate of DMACC. Specializes in insurance coordination.' },
  { name: 'Lynn',             role: 'Front Office Administrator',  photo: '/team-lynn.png',      bio: 'Brings experience from education and banking. Focuses on financial transparency and ensuring patients understand their care investments.' },
  { name: 'Kathie',           role: 'Front Office Administrator',  photo: '/team-kathie.png',    bio: 'In dentistry since 1989 — a true cornerstone of our team. Lives on a farm and enjoys camping and baking.' },
  { name: 'Anna',             role: 'Dental Hygienist',            photo: '/team-anna.png',      bio: 'Indian Hills Community College graduate. Brings skill and warmth to every cleaning. Runs a livestock business with her husband Tucker.' },
  { name: 'Rachel',           role: 'Dental Hygienist',            photo: '/team-rachel.png',    bio: 'Greenfield native and DMACC graduate. Passionate about preventive care and patient education. Enjoys golfing.' },
  { name: 'Melanie',          role: 'Dental Assistant',            photo: '/team-melanie.png',   bio: 'Over 20 years of experience in orthodontics and implant surgery. Her expertise makes even complex procedures feel seamless.' },
  { name: 'Stephanie',        role: 'Dental Assistant',            photo: '/team-stephanie.png', bio: 'Greenfield native and former optometry technician. Married with two children and loves serving the local community.' },
  { name: 'Alenda',           role: 'Dental Assistant',            photo: '/team-alenda.png',    bio: 'A valued member of our growing team, bringing fresh energy and dedication to patient care every day.' },
  { name: 'Kalyn',            role: 'Dental Assistant',            photo: '/team-kalyn.png',     bio: 'Committed to providing comfortable, high-quality care for every patient who walks through our doors.' },
]

const values = [
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>,
    title: 'Compassionate Care',
    desc: 'We treat every patient like family. Anxiety is common — we go the extra mile to ensure your comfort.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>,
    title: 'Transparency',
    desc: 'We clearly explain diagnoses, treatment options, and costs — no surprises, ever.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    title: 'Quality Results',
    desc: 'We use premium materials and proven techniques to deliver results that last years, not months.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
    title: 'Community Roots',
    desc: 'Many of our team members grew up right here. We are neighbors caring for neighbors.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>,
    title: 'Safe Environment',
    desc: 'We maintain the highest standards of sterilization and infection control for your safety and peace of mind.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
    title: 'Easy Communication',
    desc: 'Reach us by phone, text, or email. We respond quickly and make scheduling effortless.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="pt-[74px]" style={{ background: 'linear-gradient(135deg,#082840 0%,#1a6b8a 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 text-center">
          <div className="flex justify-center gap-2 mb-4 text-sm text-white/55">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80">About Us</span>
          </div>
          <h1 className="animate-fade-up delay-100 text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">About Greenfield Dental</h1>
          <p className="animate-fade-up delay-200 text-white/75 text-lg max-w-xl mx-auto">A whole-body approach to dental care, rooted in community and driven by compassion since 2006.</p>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-gradient mb-2">Our Beliefs</span>
            <h2 className="text-content mb-4">Our Practice Philosophy</h2>
            <p className="text-muted max-w-xl mx-auto">Everything we do flows from three core beliefs that have guided our practice from day one.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
              <div className="text-center p-8 bg-white border border-border rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 card-glow h-full">
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">{p.icon}</div>
                <h3 className="font-bold text-content mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHOLE-BODY APPROACH ── */}
      <section className="py-14 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
            <div className="relative h-72 md:h-96 lg:h-110 rounded-2xl overflow-hidden shadow-xl card-glow">
              <Image
                src="/office-lobby-new.png"
                alt="Greenfield Dental Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/40 to-transparent" />
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">Greenfield, Iowa</p>
                <p className="text-sm font-semibold text-content">246 Public Square</p>
              </div>
            </div>
            </FadeIn>
            <FadeIn direction="left" delay={150}>
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-gradient mb-2">Our Approach</span>
              <h2 className="text-content mb-4">Whole-Body Dentistry</h2>
              <p className="text-muted leading-relaxed mb-4">
                At Greenfield Dental, we don&apos;t just treat teeth — we treat people. Research increasingly shows that oral health is deeply connected to heart health, diabetes management, mental well-being, and overall quality of life.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Our whole-body approach means we consider your complete health picture when planning treatment. We communicate with your other healthcare providers when appropriate and design care that supports your entire well-being.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { title: 'Oral-Systemic Connection', desc: 'Gum disease is linked to heart disease, diabetes, and more — we address the full picture.' },
                  { title: 'Preventive Focus', desc: 'Stopping problems before they start is always better than treating them after.' },
                  { title: 'Long-Term Health Planning', desc: 'We help you build a dental care roadmap for decades, not just the next visit.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#2dbfaa" strokeWidth={2.5} className="w-5 h-5">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-content text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-14" id="team">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-gradient mb-2">The People Behind Your Care</span>
            <h2 className="text-content mb-4">Meet Our Team</h2>
            <p className="text-muted max-w-xl mx-auto">A dedicated, experienced team of dental professionals who genuinely care about your health and happiness.</p>
          </FadeIn>

          {/* Group photo */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-xl">
            <Image
              src="/team.jpg"
              alt="Greenfield Dental Team"
              width={1200}
              height={800}
              className="w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary-dark/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="text-white text-xl font-extrabold drop-shadow">Meet the Team</h3>
                <p className="text-white/80 text-sm mt-1">Greenfield Dental — Greenfield, Iowa</p>
              </div>
              <Link
                href="/contact"
                className="bg-white text-primary font-bold px-5 py-2.5 rounded-full text-sm hover:bg-primary-light transition-all hover:shadow-lg"
              >
                Book a Visit
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={(i % 4) * 80}>
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{ background: 'linear-gradient(135deg,#e6f3f8,#c4e4f5)' }}>
                <div className="relative h-72">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Base gradient — always visible */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#082840]/85 via-[#082840]/10 to-transparent" />

                  {/* Default: name + role at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
                    <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-1" style={{ color: '#2dbfaa' }}>{member.role}</p>
                    <h4 className="text-white font-bold text-sm">{member.name}</h4>
                  </div>

                  {/* Hover: bio slides up */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
                    style={{ background: 'linear-gradient(to top, rgba(8,40,64,0.96) 0%, rgba(8,40,64,0.78) 55%, rgba(8,40,64,0.08) 100%)' }}>
                    <span className="inline-block text-[0.6rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 w-fit border"
                      style={{ color: '#2dbfaa', background: 'rgba(45,191,170,0.15)', borderColor: 'rgba(45,191,170,0.35)' }}>
                      {member.role}
                    </span>
                    <h4 className="text-white font-bold text-sm mb-2">{member.name}</h4>
                    <p className="text-white/80 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-14" style={{ background: 'linear-gradient(135deg,#114f68 0%,#1a6b8a 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-2">What We Stand For</span>
            <h2 className="text-white mb-4">Our Patient Care Values</h2>
            <p className="text-white/65 max-w-xl mx-auto">These values aren&apos;t posted on a wall — they&apos;re lived every single day by every member of our team.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-white mb-4">{v.icon}</div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-white/68 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 text-center" style={{ background: 'linear-gradient(135deg,#2dbfaa 0%,#1a6b8a 100%)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-white mb-4">Come Experience the Difference</h2>
          <p className="text-white/80 text-lg mb-8">New patients are always welcome. We&apos;d love to become your long-term dental home in Greenfield, Iowa.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-primary-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-sm">
              Book Your First Visit
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
