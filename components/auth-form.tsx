'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getProviders, signIn } from 'next-auth/react'
import { FC } from 'react'

interface AuthFormProps {
  providers: Awaited<ReturnType<typeof getProviders>>
}

export const AuthForm: FC<AuthFormProps> = ({ providers }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        {!!providers &&
          Object.values(providers).map((provider) => (
            <Button
              key={provider.name}
              className="w-full"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </Button>
          ))}
      </CardContent>
    </Card>
  )
}
