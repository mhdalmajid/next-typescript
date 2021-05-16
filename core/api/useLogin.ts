import { LoginModel } from 'types/models'
import { signIn, SignInResponse } from 'next-auth/client'
import { useEffect, useState } from 'react'

const url = {
  login: 'Users/login',
}

export const useLogin = (data: LoginModel) => {
  const [response, setresponse] = useState<SignInResponse | undefined>(undefined)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    let isMounted = true
    if (data.email === '' || data.password === '') {
      return () => {
        isMounted = false
      }
    }
    setLoading(true)
    signIn('credentials', {
      email: data.email,
      password: data.password,
      // callbackUrl: `${window.location.origin}/profile`,
      redirect: false,
    })
      .then((response) => {
        if (isMounted) {
          setresponse(response)
          setError(null)
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error)
          setresponse(undefined)
        }
      })
      .finally(() => isMounted && setLoading(false))

    return () => {
      isMounted = false
    }
  }, [url, data])

  return { pending: loading, error, response }
}
