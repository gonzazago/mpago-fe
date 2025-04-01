'use server'

import { MercadoPagoConfig, Preference } from 'mercadopago'
import { mockProducts } from '@/data/mockProducts'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || '',
})

export async function createPreference() {
  try {
    const preference = new Preference(client)

    const items = mockProducts.map(product => ({
      title: product.title,
      quantity: product.quantity,
      currency_id: 'ARS',
      unit_price: product.price,
      description: product.description,
      picture_url: product.image,
      category_id: product.category
    }))

    const result = await preference.create({
      body: {
        items,
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
          failure: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/failure`,
          pending: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/pending`,
        },
        auto_return: 'approved',
      },
    })

    return { preferenceId: result.id }
  } catch (error) {
    console.error('Error al crear la preferencia:', error)
    throw new Error('Error al crear la preferencia de pago')
  }
} 