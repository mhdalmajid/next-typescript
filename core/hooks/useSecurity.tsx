import { useSession } from 'next-auth/client'
import router from 'next/router'

interface Protection {
  redirectUrl: string
  timeOut: number
}

const redirect = (redirectUrl, timeOut) => {
  setTimeout(() => {
    router.push(redirectUrl)
  }, timeOut)
}

function useProtection({ redirectUrl, timeOut }: Protection) {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    return (
      <div>
        <h1>You aren't signed in, please sign in first</h1>
        {redirect(redirectUrl, timeOut)}
      </div>
    )
  }
  return (
    <div>
      <h1> Protected Page</h1>
      <p>Welcome to secret page</p>
    </div>
  )
}

export default useProtection
