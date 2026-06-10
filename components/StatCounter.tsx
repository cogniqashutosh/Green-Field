'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { end: 20,   suffix: '+', label: 'Years Experience',  format: false },
  { end: 5,    suffix: '★', label: 'Google Rating',     format: false },
  { end: 3000, suffix: '+', label: 'Patients Served',   format: true  },
]

function Counter({ end, suffix, label, format }: typeof stats[number]) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1800
    let startTime: number | null = null
    const tick = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, end])

  const display = format ? count.toLocaleString() : count

  return (
    <div ref={ref}>
      <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-1">
        {display}{suffix}
      </div>
      <div className="text-[0.65rem] sm:text-xs text-white/55 font-medium tracking-wider uppercase">{label}</div>
    </div>
  )
}

export default function StatCounter() {
  return (
    <div className="flex gap-6 sm:gap-10 border-t border-white/15 pt-8">
      {stats.map((s) => <Counter key={s.label} {...s} />)}
    </div>
  )
}
