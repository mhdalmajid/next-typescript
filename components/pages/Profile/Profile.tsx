import { Container } from '@components/layouts'
import { AvatarPicker, Title, Button, Input } from '@components/elements'
import { useSession } from 'next-auth/client'
import { passworSchema, usernameSchema, mobileSchema } from '@core/validation/'
import {
  useValidatedInput,
  useValidatedInputProps,
} from '@core/hooks/useInputValidation/useInputValidation'
import { useCallback, useState } from 'react'

const usernameInitialProps: useValidatedInputProps = {
  schema: usernameSchema,
  errorText: 'username invalid',
  name: 'username',
  type: 'text',
  placeholder: 'honey call me @username',
}

const mobileInitialProps: useValidatedInputProps = {
  schema: mobileSchema,
  errorText: 'mobile invalid',
  name: 'mobile',
  type: 'text',
  placeholder: 'my mobile no.',
}

export function Profile() {
  const [session] = useSession()
  const [image, setImage] = useState()
  const [usernameProps, usernameError] = useValidatedInput(usernameInitialProps)
  const [mobileProps, mobileError] = useValidatedInput(mobileInitialProps)

  console.log(image)
  const getImage = useCallback(
    (image) => {
      setImage(image)
    },
    [image]
  )

  // const handleSubmit = () => {
  //   if ((usernameError.error, mobileError.error)) return
  // }

  return (
    <Container noNav verticalCenter>
      <Title text="profile" />
      <form method="POST" action="/profile">
        <AvatarPicker center getImage={getImage} />
        <Input purple wand {...usernameProps} />
        <Input purple wand {...mobileProps} />
        <Button label="Update" type="submit" purple />
      </form>
    </Container>
  )
}
