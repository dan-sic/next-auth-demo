import { AuthForm } from '@/components/auth-form'
import { getProviders, useSession } from 'next-auth/react'

export default async function SigninPage() {
  const providers = await getProviders()

  return <AuthForm providers={providers} />
}
