import { useSession } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Launch } from '@components/pages'

function LaunchPage() {
  const [session, loading] = useSession()
  const router = useRouter()
  console.log(session)
  if (loading) return null

  if (!loading && !session) {
    router.push('/login')
    return <p>Access Denied</p>
  }

  return (
    <>
      <Head>
        <title>flank Launch | flank</title>
      </Head>
      {session && <Launch />}
    </>
  )
}

export default LaunchPage
