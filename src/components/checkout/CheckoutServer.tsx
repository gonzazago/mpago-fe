import { createPreference } from '@/actions/mpago/preference'
import CheckoutClient from './CheckoutClient'


export default async function CheckoutServer() {
  const { preferenceId } = await createPreference()

  return <CheckoutClient preferenceId={preferenceId} />
} 