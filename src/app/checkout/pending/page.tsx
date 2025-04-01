'use client'

import { useRouter } from 'next/navigation'
import PaymentStatus from '@/components/checkout/PaymentStatus'

export default function PendingPage() {
  const router = useRouter()

  return (
    <PaymentStatus
      title="Pago Pendiente"
      message="Tu pago está siendo procesado. Te notificaremos cuando se complete el proceso."
      icon={
        <svg
          className="w-16 h-16 text-yellow-500 animate-spin"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      }
      buttonText="Volver al inicio"
      buttonAction={() => router.push('/')}
    />
  )
} 