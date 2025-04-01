'use server'

import { MercadoPagoConfig, Payment } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || '',
})

console.log(process.env.MP_ACCESS_TOKEN)

export async function processPayment(paymentData: {
  token: string
  installments: number
  paymentMethodId: string
  transactionAmount: number
  description: string
  payer: {
    email: string
    identification: {
      type: string
      number: string
    }
  }
}) {
  console.log(paymentData);
  try {
    const payment = new Payment(client)

    const result = await payment.create({
      body: {
        token: paymentData.token,
        installments: paymentData.installments,
        payment_method_id: paymentData.paymentMethodId,
        transaction_amount: paymentData.transactionAmount,
        description: paymentData.description,
        payer: {
          email: 'test@test.com',
          identification: {
            type: 'DNI',
            number: '12345678',
          },
        },
      },
    })
    console.log(result);

    return result
  } catch (error) {
    console.error('Error al procesar el pago:', error)
    throw new Error('Error al procesar el pago')
  }
} 