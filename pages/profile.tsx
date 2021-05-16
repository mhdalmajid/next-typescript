import { useSession } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Profile } from '@components/pages/'

function ProfilePage() {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) return null

  if (!loading && !session) {
    router.push('/login')
    return <p>Access Denied</p>
  }

  return (
    <>
      <Head>
        <title>flank Profile | flank</title>
      </Head>

      {/* {!session && 'Access Denied'} */}
      {session && <Profile />}
    </>
  )
}

export default ProfilePage
