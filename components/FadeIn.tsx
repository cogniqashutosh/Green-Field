'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  threshold?: number
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
}: Props) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  const anim = {
    up:    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    left:  visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    right: visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    none:  visible ? 'opacity-100' : 'opacity-0',
  }[direction]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${anim} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
