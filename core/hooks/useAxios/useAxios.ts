import { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import _ from 'lodash'

type method = (path: string, data?: any) => Promise<AxiosResponse>

interface useAxiosProps {
  method: method
  url: string
  data: object | undefined
}

export const useAxios = ({ method, url, data = {} }: useAxiosProps) => {
  const [response, setResponse] = useState<AxiosResponse | null>(null)

  const [error, setError] = useState<AxiosError | null>(null)
  const [pending, setPending] = useState<boolean>(false)

  useEffect(() => {
    let isMounted = true
    console.log('hello from axios')
    if (_.isEmpty(data)) {
      return () => {
        setPending(false)
        setError(null)
        setResponse(null)
        isMounted = false
      }
    }

    setPending(true)

    method(url, data)
      .then((response) => {
        if (isMounted) {
          setError(null)
          setResponse(response)
        }
      })
      .catch((error: AxiosError) => {
        if (isMounted) {
          setError(error)
          setResponse(null)
        }
      })
      .finally(() => isMounted && setPending(false))

    return () => {
      isMounted = false
    }
  }, [url, data])

  return { pending, error, response }
}
