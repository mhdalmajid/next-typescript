import { Signup } from '@components/pages'
import { useSession } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function SignupPage() {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) return null

  if (!loading && session) {
    router.push('/launch')

    return (
      <div className="flex flex-col items-center content-center self-center h-screen">
        <h3>loged in as {session.user.email}</h3>
        <h4>waiting for redirect</h4>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>flank Profile | flank</title>
      </Head>

      <Signup />
    </>
  )
}

export default SignupPage
