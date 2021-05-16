import { Container } from '@components/layouts'
import { Text, GBtn, Title, Button, Input, Anchor } from '@components/elements'
import {
  useValidatedInput,
  useValidatedInputProps,
} from '@core/hooks/useInputValidation/useInputValidation'
import { emailSchema, passworSchema, nameSchema } from '@core/validation/'
import { FormEvent, useEffect, useState } from 'react'
// import tw from 'twin.macro'
import { useSignup } from '@core/api'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { UserCreateModel } from '../../../types'

const emailInitialProps: useValidatedInputProps = {
  schema: emailSchema,
  errorText: 'email invalid',
  name: 'email',
  type: 'email',
  required: true,
  placeholder: 'email',
}

const passwordInitialProps: useValidatedInputProps = {
  schema: passworSchema,
  errorText: 'password invalid',
  name: 'password',
  type: 'password',
  required: true,
  placeholder: 'password',
}
const nameInitialProps: useValidatedInputProps = {
  schema: nameSchema,
  errorText: 'full name invalid',
  name: 'fullName',
  type: 'text',
  required: true,
  placeholder: 'full name',
}

// const Main = tw.div`flex flex-col justify-center h-screen px-3 mx-auto pt-9 w-80`

export const Signup = () => {
  const [emailProps, emailError] = useValidatedInput(emailInitialProps)
  const [passwordProps, passwordError] = useValidatedInput(passwordInitialProps)
  const [nameProps, nameError] = useValidatedInput(nameInitialProps)

  const router = useRouter()

  const [data, setData] = useState<UserCreateModel | {}>({})
  const { pending, error, response } = useSignup(data)

  console.log('is it pending?:', pending)

  useEffect(() => {
    let isMounted = true

    if (response) router.push('/login')

    return () => {
      isMounted = false
    }
  }, [response])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailError.error || passwordError.error || nameError.error) return
    // if (emailProps.value === '' || passwordError || nameError) return

    setData({
      email: emailProps.value,
      password: passwordProps.value,
      fullName: nameProps.value,
    })
  }

  const handleGoogleClick = () => {
    signIn('google', { redirect: true, callbackUrl: '/login' })
  }

  return (
    <Container noNav verticalCenter>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <Title text="signup" />
        <GBtn onClick={handleGoogleClick} />
        <Text center gray sm>
          Or sign up with email
        </Text>
        {error && <Text red text="Email already exist" center />}
        <Input purple {...nameProps} />
        <Input purple {...emailProps} />
        <Input purple {...passwordProps} />
        <Text center lg purple semibold>
          flank sinatras, sweet to see ya
        </Text>

        <Button label="Sign Up" purple type="submit" disabled={pending} />
      </form>
      <div className="w-48 mx-auto leading-4 text-center">
        <Anchor href="/login" sm gray>
          already have an account?
          <br />
          LOGIN?
        </Anchor>
      </div>
    </Container>
  )
}
