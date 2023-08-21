import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FormErrorMessage } from '@/components/ui/form'
import { authSchema, AuthForm } from '@/components/auth-form'
import { z } from 'zod'

export default function SignupPage() {
  // const onSubmit = (data: z.infer<typeof authSchema>) => console.log(data)

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <AuthForm />
        {false && (
          <FormErrorMessage className="mt-4">{null}</FormErrorMessage>
        )}
      </CardContent>
      <CardFooter>
        <Button form="auth-form" type="submit">
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}