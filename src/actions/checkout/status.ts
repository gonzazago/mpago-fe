'use server'

import { MercadoPagoConfig } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || '',
})

export async function getPaymentStatus(paymentId: string) {
  try {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Error al obtener el estado del pago')
    }

    const data = await response.json()
    return data.status
  } catch (error) {
    console.error('Error al obtener el estado del pago:', error)
    throw new Error('Error al obtener el estado del pago')
  }
}

export async function getPaymentDetails(paymentId: string) {
  try {
    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Error al obtener los detalles del pago')
    }

    return await response.json()
  } catch (error) {
    console.error('Error al obtener los detalles del pago:', error)
    throw new Error('Error al obtener los detalles del pago')
  }
} 