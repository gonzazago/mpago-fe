import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout | MercadoPago',
  description: 'Realiza tu pago de forma segura',
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  )
} 