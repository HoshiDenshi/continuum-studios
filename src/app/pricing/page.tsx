'use client'
import { useState } from 'react'

const plans = [
  {
    name: 'Solo Studio',
    price: '$9',
    period: 'mo',
    projects: 1,
    priceId: 'price_1TPoHv1rsi5cehVWxt1ldEOM',
  },
  {
    name: 'Trio Studio',
    price: '$19',
    period: 'mo',
    projects: 3,
    priceId: 'price_1TPoKc1rsi5cehVW5elxMmuz',
  },
  {
    name: 'Ensemble Studio',
    price: '$29',
    period: 'mo',
    projects: 5,
    priceId: 'price_1TPoLH1rsi5cehVWBIADkYWF',
  },
]

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleSubscribe = async (priceId: string) => {
    setLoading(priceId)
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    })
    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Choose your plan</h1>
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
        {plans.map((plan) => (
          <div key={plan.priceId} style={{
            border: '1px solid #ccc',
            borderRadius: '12px',
            padding: '1.5rem',
            width: '200px',
          }}>
            <h2>{plan.name}</h2>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {plan.price}<span style={{ fontSize: '1rem' }}>/{plan.period}</span>
            </p>
            <p>{plan.projects} project{plan.projects > 1 ? 's' : ''}</p>
            <button
              onClick={() => handleSubscribe(plan.priceId)}
              disabled={loading === plan.priceId}
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                background: '#6c47ff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              {loading === plan.priceId ? 'Loading...' : 'Subscribe'}
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}