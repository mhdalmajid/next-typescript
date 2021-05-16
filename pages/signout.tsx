import { signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Button } from '../components/elements'

const Signout = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  const handleClick = async () => {
    signOut({ redirect: false })
  }

  if (loading) return null

  if (!loading && !session) {
    router.push('/')
    return null
  }

  return (
    <div className="flex items-center self-center h-screen">
      <Button type="button" onClick={handleClick}>
        Sign out
      </Button>
    </div>
  )
}

export default Signout
