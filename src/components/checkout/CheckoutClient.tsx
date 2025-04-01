'use client'

import { initMercadoPago } from '@mercadopago/sdk-react'
import ProductList from './ProductList'
import PaymentForm from './PaymentForm'
import { useRouter } from 'next/navigation'

// Inicializar MercadoPago con tu public key
initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY || '')

interface CheckoutClientProps {
  preferenceId: string
}

export default function CheckoutClient({ preferenceId }: CheckoutClientProps) {
  const router = useRouter()

  const handlePaymentSuccess = () => {
    router.push('/checkout/success')
  }

  const handlePaymentError = () => {
    router.push('/checkout/failure')
  }

  const handlePaymentPending = () => {
    router.push('/checkout/pending')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Columna izquierda: Lista de productos */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Tu pedido</h2>
        <ProductList />
      </div>

      {/* Columna derecha: Formulario de pago */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Pago</h2>
        <PaymentForm 
          preferenceId={preferenceId}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
          onPending={handlePaymentPending}
        />
      </div>
    </div>
  )
} 