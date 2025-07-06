import { useState } from 'react'
import { z } from 'zod'

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export const SubscribeForm = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validation = emailSchema.safeParse({ email })
    if (!validation.success) {
      setError(validation.error.issues[0].message)
      return
    }

    setStatus('loading')
    setError(null)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setError('Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded border border-gray-600 bg-neutral-900 text-white"
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-4 py-2 bg-neon text-black rounded hover:bg-neon-light transition"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && (
        <p className="text-green-400 text-sm">Subscribed successfully!</p>
      )}
    </form>
  )
}
