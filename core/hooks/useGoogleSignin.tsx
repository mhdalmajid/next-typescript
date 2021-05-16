import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useGoogleSignin = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  //   const isLoggedIn = !!session?.user
  //   const { isNewUser } = (session && session.user) || 'asad'

  //   useEffect(() => {
  //     let mounted = true

  //     if (!isLoggedIn) {
  //       return () => {
  //         mounted = false
  //         router.push('/login')
  //       }
  //     }

  //     if (isNewUser) {
  //       return () => {
  //         mounted = false
  //         router.push('/app/gettingstarted')
  //       }
  //     }

  //     return () => {
  //       mounted = false
  //     }
  //   }, [isLoggedIn, isNewUser, router])
}
