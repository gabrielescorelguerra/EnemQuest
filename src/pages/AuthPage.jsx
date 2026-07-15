import { useParams } from 'react-router-dom'
import Input from '@/components/Input'
import Button from '@/components/Button'

import { AtSign } from 'lucide-react'
import { Lock } from 'lucide-react'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { UserAuth } from '@/context/AuthContext.jsx'

import { useNavigate } from 'react-router-dom'

function AuthPage() {
  const { mode } = useParams()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { signUpNewUser, signInUser } = UserAuth()

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await signUpNewUser(email, password)
      if (result.success) {
        navigate('/history')
      }
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await signInUser(email, password)
      if (result.success) {
        navigate('/history')
      }
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const isLogin = mode === 'login'

  return (
    <>
      <main className='flex flex-col items-center justify-center gap-10 h-screen bg-linear-to-b from-bg-start to-bg-end'>
        <h1 className='font-bold capitalize text-4xl leading-none'>{mode}</h1>
        <form
          onSubmit={isLogin ? handleSignIn : handleSignUp}
          action=''
          className='flex flex-col items-center gap-13 w-90'
        >
          <div className='flex flex-col items-center gap-10 w-full'>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Email'
              icon={AtSign}
              autoComplete='email'
            ></Input>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Senha'
              icon={Lock}
              autoComplete={isLogin ? 'current-password' : 'new-password'}
            ></Input>
          </div>
          <Button variant='primary' disabled={loading} submit>
            {mode == 'login' ? 'Entrar' : 'Criar usuário'}
          </Button>
          {error && (
            <div className='flex flex-col items-center gap-10 w-full bg-red-50 border border-red-500 text-red-500 p-4 rounded-md'>
              <p>Error {error}</p>
            </div>
          )}
        </form>
      </main>
      <footer className='absolute bottom-4 left-1/2 -translate-x-1/2'>
        <p>
          {mode == 'login' ? 'Ainda não tem um usuário?' : 'Já tem um usuário? Faça o'}
          <Link
            to={`/auth/${mode == 'login' ? 'registro' : 'login'}`}
            className='text-primary-end hover:cursor-pointer hover:font-bold'
          >
            {mode == 'login' ? ' Registre-se ' : ' Login '}
          </Link>
          já.
        </p>
      </footer>
    </>
  )
}

export default AuthPage
