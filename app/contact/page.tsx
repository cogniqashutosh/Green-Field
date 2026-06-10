import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="pt-[74px]" style={{ background: 'linear-gradient(135deg,#082840 0%,#1a6b8a 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 text-center">
          <div className="flex justify-center gap-2 mb-4 text-sm text-white/55">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80">Contact</span>
          </div>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">Contact & Appointments</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">We&apos;re accepting new patients. Reach out today to schedule your visit or ask any questions.</p>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-start">

            {/* Left: Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-7 border border-border shadow-xl">
                <h3 className="font-bold text-content mb-5">Practice Information</h3>

                {[
                  {
                    icon: <svg viewBox="0 0 24 24" fill="#1a6b8a" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3-8.63A2 2 0 012 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.4a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                    label: 'Phone',
                    content: <a href="tel:+16417432314" className="font-semibold text-content hover:text-primary transition-colors">(641) 743-2314</a>,
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="#1a6b8a" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6" fill="none" stroke="#1a6b8a" strokeWidth="2"/></svg>,
                    label: 'Email',
                    content: <a href="mailto:greenfielddds@gmail.com" className="font-semibold text-content hover:text-primary transition-colors break-all">greenfielddds@gmail.com</a>,
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="#1a6b8a" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3" fill="none" stroke="#1a6b8a" strokeWidth="2"/></svg>,
                    label: 'Address',
                    content: <span className="font-semibold text-content">246 Public Square<br />Greenfield, IA 50849</span>,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 items-start py-4 border-b border-border last:border-none">
                    <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-[0.72rem] font-bold text-subtle uppercase tracking-wider mb-1">{item.label}</p>
                      <div className="text-sm">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-7 border border-border shadow-xl">
                <h3 className="font-bold text-content mb-4">Office Hours</h3>
                <div className="flex flex-col gap-1">
                  {[
                    ['Monday',    '7:00am – 5:00pm', false],
                    ['Tuesday',   '7:00am – 4:00pm', false],
                    ['Wednesday', '7:00am – 6:00pm', false],
                    ['Thursday',  '7:00am – 5:00pm', false],
                    ['Friday',    'Closed',           true],
                    ['Saturday',  'Closed',           true],
                    ['Sunday',    'Closed',           true],
                  ].map(([day, time, closed]) => (
                    <div key={String(day)} className="flex justify-between items-center py-2 border-b border-border/50 last:border-none">
                      <span className="text-sm text-muted font-medium">{day}</span>
                      <span className={`text-sm font-semibold ${closed ? 'text-red-400' : 'text-content'}`}>{time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-accent/10 rounded-xl">
                  <p className="text-xs text-accent font-semibold text-center">Emergency? Call us at (641) 743-2314</p>
                </div>
              </div>

              {/* Social */}
              <div className="bg-primary rounded-2xl p-6 text-center">
                <p className="text-white font-semibold mb-3 text-sm">Follow Us on Facebook</p>
                <a
                  href="https://www.facebook.com/GFDIA246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold px-5 py-2.5 rounded-full hover:bg-primary-light transition-all text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                  @GreenfieldDental
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-2">Find Us</span>
            <h2 className="text-content mb-2">Our Location</h2>
            <p className="text-muted">246 Public Square, Greenfield, IA 50849</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-md" style={{ height: 420 }}>
            <iframe
              src="https://maps.google.com/maps?q=246+Public+Square+Greenfield+IA+50849&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Greenfield Dental Location"
            />
          </div>
          <div className="text-center mt-5">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=246+Public+Square+Greenfield+IA+50849"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-all text-sm hover:-translate-y-0.5 hover:shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3" fill="none" stroke="white" strokeWidth="2"/>
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
