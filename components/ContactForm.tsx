'use client'

import { useState } from 'react'

type FormData = {
  firstName: string
  lastName: string
  phone: string
  email: string
  service: string
  date: string
  message: string
}

const initialForm: FormData = {
  firstName: '', lastName: '', phone: '', email: '',
  service: '', date: '', message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please call us at (641) 743-2314 or try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 border border-border rounded-xl text-sm text-content bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200'
  const labelClass = 'block text-xs font-semibold text-content mb-1.5 tracking-wide'

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-xl border border-border text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-8 h-8 text-accent">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-content mb-2">Request Received!</h3>
        <p className="text-muted text-sm mb-6">
          Thank you! We'll contact you within one business day to confirm your appointment.
        </p>
        <button
          onClick={() => { setForm(initialForm); setSubmitted(false) }}
          className="bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-all"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-border">
      <div className="mb-7">
        <h3 className="text-xl font-bold text-content mb-1">Request an Appointment</h3>
        <p className="text-sm text-muted">Fill out the form and we'll get back to you within one business day.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>First Name *</label>
            <input required type="text" value={form.firstName} onChange={set('firstName')} placeholder="Jane" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Last Name *</label>
            <input required type="text" value={form.lastName} onChange={set('lastName')} placeholder="Smith" className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Phone *</label>
            <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="(641) 000-0000" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Service Interested In</label>
            <select value={form.service} onChange={set('service')} className={inputClass}>
              <option value="">Select a service...</option>
              <option>General Dentistry</option>
              <option>Dental Implants</option>
              <option>Cosmetic Dentistry</option>
              <option>All-On-4 Implants</option>
              <option>Smile Makeover</option>
              <option>Preventive Care</option>
              <option>Restorative Dentistry</option>
              <option>Invisalign</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Preferred Date</label>
            <input type="date" value={form.date} onChange={set('date')} className={inputClass} />
          </div>
        </div>

        <div className="mb-6">
          <label className={labelClass}>Message / Notes</label>
          <textarea
            value={form.message}
            onChange={set('message')}
            placeholder="Tell us about your dental concerns or questions..."
            rows={4}
            className={`${inputClass} resize-none`}
          />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-sm"
        >
          {loading ? 'Sending...' : 'Request Appointment'}
        </button>
        <p className="text-center text-xs text-subtle mt-3">
          Or call us directly at{' '}
          <a href="tel:+16417432314" className="text-primary font-semibold hover:underline">(641) 743-2314</a>
        </p>
      </form>
    </div>
  )
}
