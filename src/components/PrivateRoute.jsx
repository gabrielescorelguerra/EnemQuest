import { Navigate, Outlet } from 'react-router-dom'
import { UserAuth } from '@/context/AuthContext'

export default function PrivateRoute() {
  const { session } = UserAuth()

  if (session === undefined) {
    return <p>Carregando...</p>
  }

  return <>{session ? <Outlet /> : <Navigate to='/auth/login' replace />}</>
}
