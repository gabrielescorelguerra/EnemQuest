import Button from '@/components/Button'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center gap-5 h-screen w-screen bg-linear-to-b from-bg-start to-bg-end'>
      <h1 className='text-xl font-bold'>Página não encontrada</h1>
      <Button variant='primary' size='md' onClick={() => navigate('/')}>
        Voltar à Homepage
      </Button>
    </div>
  )
}

export default NotFoundPage
