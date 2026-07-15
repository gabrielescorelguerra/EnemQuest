import { UserAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'

function HistoryPage() {
  const { session, signOut } = UserAuth()

  const navigate = useNavigate()

  const handleSignOut = async (e) => {
    e.preventDefault()
    try {
      await signOut()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button onClick={handleSignOut}>Logout</button>
      <p>Welcome {session?.user?.email}</p>
    </>
  )
}

export default HistoryPage
