'use client'

import {processPayment} from '@/actions/checkout/payment'
import {CardPayment, initMercadoPago} from '@mercadopago/sdk-react'
import {useEffect} from "react";

interface PaymentFormProps {
    preferenceId: string
    onSuccess: () => void
    onError: () => void
    onPending: () => void
}

export default function PaymentForm({
                                        onSuccess,
                                        onError,
                                        onPending
                                    }: PaymentFormProps) {

    useEffect(() => {
        initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!,{locale: 'es-AR'});
        return () => {
            window?.cardPaymentBrickController?.unmount();
        };
    })
    return (
        <div className="w-full">
            <CardPayment
                customization={{
                    visual: {
                        text:{installmentsSectionTitle:"Cantidad de cuotas"},
                        style: {
                            theme: 'dark', // | 'dark' | 'bootstrap' | 'flat'
                            customVariables: {}
                        }
                    },
                }}
                initialization={{amount: 100}}
                onSubmit={async (formData) => {
                    try {
                        const paymentData = {
                            token: formData.token,
                            installments: formData.installments,
                            paymentMethodId: formData.payment_method_id,
                            transactionAmount: formData.transaction_amount,
                            description: 'Pago de productos',
                            payer: {
                                email: formData.payer.email,
                                identification: {
                                    type: formData.payer.identification.type,
                                    number: formData.payer.identification.number,
                                }
                            }
                        }
                        await processPayment(paymentData)
                    } catch (error) {
                        console.error('Error al procesar el pago:', error)
                        onError()
                    }
                }}
                onReady={() => {
                    console.log('CardPayment está listo')
                }}
                onError={(error) => {
                    console.error('Error en CardPayment:', error)
                    onError()
                }}
                onSuccess={(result) => {
                    console.log('Pago exitoso:', result)
                    onSuccess()
                }}
                onPending={(result) => {
                    console.log('Pago pendiente:', result)
                    onPending()
                }}
            />
        </div>
    )
}