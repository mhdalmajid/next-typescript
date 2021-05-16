import { Signin } from '@components/pages'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react'

function LoginPage() {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) return null

  if (!loading && session) {
    router.push('/launch')

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h3>loged in as {session.user.email}</h3>
        <h4>waiting for redirect</h4>
      </div>
    )
  }

  if (!loading && !session) {
    return (
      <>
        <Head>
          <title>log in | flank</title>
        </Head>
        <Signin />
      </>
    )
  }
}

export default LoginPage
