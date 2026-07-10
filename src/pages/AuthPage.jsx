import { useParams } from 'react-router-dom'
import Input from '@/components/Input'
import Button from '@/components/Button'

import { AtSign } from 'lucide-react'
import { Lock } from 'lucide-react'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { UserAuth } from '@/context/AuthContext.jsx'

function AuthPage() {
  const { mode } = useParams()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { session, signUpNewUser } = UserAuth()

  const isLogin = mode === 'login'

  return (
    <>
      <main className='flex flex-col items-center justify-center gap-10 h-screen bg-linear-to-b from-bg-start to-bg-end'>
        <h1 className='font-bold capitalize text-4xl leading-none'>{mode}</h1>
        <form action='' className='flex flex-col items-center gap-13 w-90'>
          <div className='flex flex-col items-center gap-10 w-full'>
            <Input type='email' placeholder='Email' icon={AtSign} autoComplete='email'></Input>
            <Input
              type='password'
              placeholder='Senha'
              icon={Lock}
              autoComplete={isLogin ? 'current-password' : 'new-password'}
            ></Input>
          </div>
          <Button variant='primary' disabled={loading} submit>
            {mode == 'login' ? 'Entrar' : 'Criar usuário'}
          </Button>
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
