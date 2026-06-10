'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-border transition-all duration-300 ${scrolled ? 'shadow-lg' : ''
          }`}
      >
        <div className="w-full px-6 h-[74px] flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Greenfield Dental"
              width={234}
              height={78}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === l.href
                    ? 'bg-primary-light text-primary'
                    : 'text-content hover:bg-primary-light hover:text-primary'
                  }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+16417432314"
              className="flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3-8.63A2 2 0 012 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.4a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (641) 743-2314
            </a>
            <Link
              href="/contact"
              className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-content rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-content rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-content rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed top-[74px] left-0 right-0 z-40 bg-white border-b border-border shadow-xl px-6 py-4 flex flex-col gap-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === l.href ? 'bg-primary-light text-primary' : 'text-content hover:bg-primary-light hover:text-primary'
                }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+16417432314"
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3-8.63A2 2 0 012 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.4a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            (641) 743-2314
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 bg-primary text-white text-sm font-semibold px-5 py-3 rounded-xl text-center hover:bg-primary-dark transition-all"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </>
  )
}
