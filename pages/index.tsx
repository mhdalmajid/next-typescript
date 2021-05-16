import { Home, Intro, Signup } from '@components/pages'
import { useState, useCallback, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { About } from '../components/pages/About/About'

function HomePage() {
  const [session] = useSession()
  const [showAbout, setshowAbout] = useState<boolean>(false)
  const [showSignup, setshowSignup] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    let mounted = true

    if (showSignup && session) router.push('/profile')

    return () => {
      mounted = false
    }
  }, [showSignup])

  const handleAboutState = useCallback(
    (state) => {
      setshowAbout(state)
    },
    [showAbout]
  )

  const handleSignupState = useCallback(
    (state) => {
      setshowSignup(state)
    },
    [showAbout]
  )

  return (
    <>
      <Home callback={handleAboutState} />
      <Intro callback={handleSignupState} />

      {showAbout && <About />}
      {!session && showSignup && <Signup />}
    </>
  )
}
export default HomePage
