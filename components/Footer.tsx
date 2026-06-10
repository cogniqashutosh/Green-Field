import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'General Dentistry',   href: '/services#general' },
  { label: 'Dental Implants',     href: '/services#implants' },
  { label: 'Cosmetic Dentistry',  href: '/services#cosmetic' },
  { label: 'All-On-4 Solutions',  href: '/services#allon4' },
  { label: 'Smile Makeovers',     href: '/services#makeovers' },
  { label: 'Preventive Care',     href: '/services#preventive' },
  { label: 'Restorative Dentistry', href: '/services#restorative' },
]

const quickLinks = [
  { label: 'Home',             href: '/' },
  { label: 'Services',         href: '/services' },
  { label: 'About Us',         href: '/about' },
  { label: 'Meet the Team',    href: '/about#team' },
  { label: 'Book Appointment', href: '/contact' },
  { label: 'Contact',          href: '/contact' },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/GFDIA246/',
    bg: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer>

      {/* ── MAIN FOOTER ── */}
      <div className="bg-[#0a1929] text-white/65">
        <div className="w-full px-6 pt-14 pb-0 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

            {/* Brand */}
            <div>
              <div className="mb-5">
                <Image
                  src="/logo.png"
                  alt="Greenfield Dental"
                  width={208}
                  height={70}
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm leading-relaxed text-white/50 mb-6">
                A whole-body dental practice serving Greenfield, Iowa and surrounding communities since 2006.
              </p>

              {/* Stars */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-yellow-400 text-base tracking-tight">★★★★★</span>
                <span className="text-xs text-white/40 font-medium">5.0 · Google Reviews</span>
              </div>

              {/* Social icons */}
              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: s.bg }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-white text-sm font-bold mb-5 uppercase tracking-widest">Our Services</h5>
              <ul className="flex flex-col gap-2.5">
                {services.map((s) => (
                  <li key={s.href} className="group flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                    <Link
                      href={s.href}
                      className="text-sm text-white/50 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-white text-sm font-bold mb-5 uppercase tracking-widest">Quick Links</h5>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((l) => (
                  <li key={l.label} className="group flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-white text-sm font-bold mb-5 uppercase tracking-widest">Contact Us</h5>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3-8.63A2 2 0 012 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.4a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                    label: '(641) 743-2314',
                    href: 'tel:+16417432314',
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                    label: 'greenfielddds@gmail.com',
                    href: 'mailto:greenfielddds@gmail.com',
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                    label: '246 Public Square, Greenfield, IA 50849',
                    href: 'https://maps.google.com/?q=246+Public+Square+Greenfield+IA+50849',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex gap-3 items-start group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center shrink-0 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                      {item.icon}
                    </div>
                    <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-200 leading-relaxed pt-1">
                      {item.label}
                    </span>
                  </a>
                ))}

              </div>
            </div>

          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-3">
            <div className="flex items-center gap-3 text-xs text-white/25">
              <span>© {new Date().getFullYear()} Greenfield Dental.</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>All rights reserved.</span>
            </div>
            <div className="flex items-center gap-5 text-xs text-white/25">
              <Link href="/contact" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <Link href="/contact" className="hover:text-accent transition-colors">Terms of Service</Link>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Greenfield, Iowa</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
