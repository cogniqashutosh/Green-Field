'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const INITIAL: Message = {
  role: 'assistant',
  content: "Hi there! I'm your Greenfield Dental assistant. How can I help you today? Ask me about our services, hours, or how to book an appointment!",
}

const SUGGESTIONS = ['Book appointment', 'Office hours', 'Dental implants', 'Services & pricing']

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [confirmClear, setConfirmClear] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  const clearChat = () => {
    if (confirmClear) {
      setMessages([INITIAL])
      setConfirmClear(false)
      setInput('')
    } else {
      setConfirmClear(true)
      setTimeout(() => setConfirmClear(false), 3000)
    }
  }

  const send = async (text?: string) => {
    const content = (text ?? input).trim()
    if (!content || loading) return
    const userMsg: Message = { role: 'user', content }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(1) }),
      })
      const data = await res.json()
      setMessages([...next, { role: 'assistant', content: data.message }])
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Something went wrong. Please call us at (641) 743-2314.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── CHAT WINDOW ── */}
      <div
        className={`fixed bottom-24 right-3 sm:right-6 z-50 flex flex-col rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 origin-bottom-right ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ width: 'min(370px, calc(100vw - 24px))', height: 540, background: '#f0f4f8' }}
      >
        {/* ── HEADER ── */}
        <div className="relative shrink-0 px-4 py-3.5 flex items-center gap-3"
          style={{ background: 'linear-gradient(135deg, #082840 0%, #1a6b8a 60%, #2dbfaa 100%)' }}>

          {/* Logo */}
          <div className="relative shrink-0">
            <Image
              src="/logo.png"
              alt="Greenfield Dental"
              width={150}
              height={50}
              className="h-9 w-auto brightness-0 invert"
            />
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-white/30 rounded-full" />
          </div>

          {/* Status */}
          <div className="flex-1 min-w-0">
            <p className="text-white/60 text-[0.7rem]">AI Assistant · Online</p>
          </div>

          {/* Clear button */}
          <button
            onClick={clearChat}
            title={confirmClear ? 'Click again to confirm' : 'Clear chat'}
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${
              confirmClear
                ? 'bg-red-400/90 text-white scale-110'
                : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
            }`}
          >
            {confirmClear ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
                <path d="M10 11v6M14 11v6"/>
              </svg>
            )}
          </button>

          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* ── MESSAGES ── */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}>

          {messages.map((msg, i) => (
            <div key={i} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>

              {/* Assistant avatar */}
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-xl shrink-0 flex items-center justify-center mb-0.5"
                  style={{ background: 'linear-gradient(135deg,#082840,#1a6b8a)' }}>
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.8 1.3 3.8L5 20h14l-2.3-9.2C17.5 9.8 18 8.5 18 7c0-2.5-2.5-5-6-5z"/>
                  </svg>
                </div>
              )}

              <div className={`max-w-[78%] text-sm leading-relaxed px-4 py-2.5 shadow-sm ${
                msg.role === 'user'
                  ? 'text-white rounded-2xl rounded-br-md'
                  : 'bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-bl-md'
              }`}
                style={msg.role === 'user' ? { background: 'linear-gradient(135deg,#1a6b8a,#2dbfaa)' } : {}}>
                {msg.content}
              </div>

              {/* User avatar */}
              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-xl shrink-0 flex items-center justify-center mb-0.5 bg-gray-200">
                  <svg viewBox="0 0 24 24" fill="#64748b" className="w-4 h-4">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-7 h-7 rounded-xl shrink-0 flex items-center justify-center mb-0.5"
                style={{ background: 'linear-gradient(135deg,#082840,#1a6b8a)' }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.8 1.3 3.8L5 20h14l-2.3-9.2C17.5 9.8 18 8.5 18 7c0-2.5-2.5-5-6-5z"/>
                </svg>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center">
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#1a6b8a', animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#1a6b8a', animationDelay: '160ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#1a6b8a', animationDelay: '320ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* ── SUGGESTIONS ── */}
        {messages.length === 1 && !loading && (
          <div className="px-4 py-2 flex gap-2 overflow-x-auto shrink-0"
            style={{ scrollbarWidth: 'none' }}>
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)}
                className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap hover:-translate-y-0.5"
                style={{ background: 'white', borderColor: '#2dbfaa', color: '#1a6b8a' }}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* ── INPUT ── */}
        <div className="shrink-0 px-3 py-3 bg-white border-t border-gray-100">
          <form onSubmit={(e) => { e.preventDefault(); send() }}
            className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-1.5 focus-within:border-primary transition-colors">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 text-sm py-1.5 bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
            />
            <button type="submit" disabled={loading || !input.trim()}
              className="w-8 h-8 shrink-0 rounded-xl flex items-center justify-center text-white transition-all duration-200 disabled:opacity-40 hover:scale-110 disabled:hover:scale-100"
              style={{ background: 'linear-gradient(135deg,#1a6b8a,#2dbfaa)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </form>
          <p className="text-center text-[0.6rem] text-gray-400 mt-1.5"> Greenfield Dental</p>
        </div>
      </div>

      {/* ── TOGGLE BUTTON ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        className="fixed bottom-6 right-3 sm:right-6 z-50 w-14 h-14 rounded-2xl text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #082840 0%, #1a6b8a 60%, #2dbfaa 100%)' }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor"
          className={`w-6 h-6 absolute transition-all duration-300 ${open ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
          className={`w-5 h-5 absolute transition-all duration-300 ${open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>

        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-2xl animate-ping opacity-20"
            style={{ background: '#2dbfaa' }} />
        )}
        {/* Notification dot */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full border-2 border-white" />
        )}
      </button>
    </>
  )
}
