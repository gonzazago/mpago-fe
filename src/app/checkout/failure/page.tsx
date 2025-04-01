'use client'

import { useRouter } from 'next/navigation'
import PaymentStatus from '@/components/checkout/PaymentStatus'

export default function FailurePage() {
  const router = useRouter()

  return (
    <PaymentStatus
      title="Error en el Pago"
      message="Hubo un problema al procesar tu pago. Por favor, intenta nuevamente o contacta a soporte si el problema persiste."
      icon={
        <svg
          className="w-16 h-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      }
      buttonText="Intentar nuevamente"
      buttonAction={() => router.push('/checkout')}
    />
  )
} 