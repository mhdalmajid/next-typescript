import { Container } from '@components/layouts'
import { Text, Title, Button, Input, Anchor } from '@components/elements'
import {
  useValidatedInput,
  useValidatedInputProps,
} from '@core/hooks/useInputValidation/useInputValidation'
import { emailSchema, passworSchema, nameSchema } from '@core/validation/'
import { FormEvent, useState, useEffect } from 'react'
import { useLogin } from '@core/api'

const emailInitialProps: useValidatedInputProps = {
  schema: emailSchema,
  errorText: 'email invalid',
  name: 'email',
  type: 'email',
  placeholder: 'email',
}

const passwordInitialProps: useValidatedInputProps = {
  schema: passworSchema,
  errorText: 'password invalid',
  name: 'password',
  type: 'password',
  placeholder: 'password',
}

export const Signin = () => {
  const [emailProps, emailError] = useValidatedInput(emailInitialProps)
  const [passwordProps, passwordError] = useValidatedInput(passwordInitialProps)
  const [data, setData] = useState<string | any>({ email: '', password: '' })
  const { pending, error, response } = useLogin(data)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailError.error || passwordError.error) return
    if (emailProps.value === '' || passwordProps.value === '') return

    setData({ email: emailProps.value, password: passwordProps.value })
  }

  return (
    <Container noNav verticalCenter>
      <form action="/" method="post" onSubmit={onSubmit}>
        <Title text="login" />
        <div className="my-12">
          <Text center gray sm>
            Login with your email
          </Text>
          <Input purple {...emailProps} />
          <Input purple {...passwordProps} />
          <Anchor href="/forgot" sm gray center block>
            forgot?
          </Anchor>
          {response?.error && 'there is error'}
        </div>

        <Text center lg purple semibold>
          flankensteins, it’s boogie time
        </Text>
        <Button label="Log In" purple type="submit" disabled={pending} />
      </form>
      <div className="w-48 mx-auto text-center">
        <Anchor href="/signup" sm gray>
          don’t have an account yet?
          <br />
          SIGN UP
        </Anchor>
      </div>
    </Container>
  )
}
