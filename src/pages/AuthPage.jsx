import { useParams } from 'react-router-dom'
import Input from '@/components/Input'
import Button from '@/components/Button'

import { User } from 'lucide-react'
import { Lock } from 'lucide-react'

function AuthPage() {
  const { mode } = useParams()

  return (
    <>
      <main className='flex flex-col items-center justify-center gap-10 h-screen bg-linear-to-b from-bg-start to-bg-end'>
        <h1 className='font-bold capitalize text-4xl leading-none'>{mode}</h1>
        <form action='' className='flex flex-col items-center gap-13 w-90'>
          <div className='flex flex-col items-center gap-10 w-full'>
            <Input type='text' placeholder='Nome do usuário' icon={User}></Input>
            <Input type='password' placeholder='Senha' icon={Lock}></Input>
          </div>
          <Button variant='primary'>{mode == 'login' ? 'Entrar' : 'Criar usuário'}</Button>
        </form>
      </main>
      <footer className='absolute bottom-4 left-1/2 -translate-x-1/2'>
        {mode == 'login' ? (
          <p>
            Ainda não tem um usuário? <a className='text-primary-end'>Registre-se</a> já.
          </p>
        ) : (
          <p>
            Já tem um usuário? Faça o <a className='text-primary-end'>Login</a>.
          </p>
        )}
      </footer>
    </>
  )
}

export default AuthPage
