'use client'

import { useRouter } from 'next/navigation'
import PaymentStatus from '@/components/checkout/PaymentStatus'

export default function SuccessPage() {
  const router = useRouter()

  return (
    <PaymentStatus
      title="¡Pago Exitoso!"
      message="Tu pago ha sido procesado correctamente. Te enviaremos un correo electrónico con los detalles de tu compra."
      icon={
        <svg
          className="w-16 h-16 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      }
      buttonText="Volver al inicio"
      buttonAction={() => router.push('/')}
    />
  )
} 