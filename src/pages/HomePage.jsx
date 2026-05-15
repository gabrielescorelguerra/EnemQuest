import { useNavigate } from 'react-router-dom'
import Button from '@/components/Button'

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <main className='flex flex-col items-center justify-center gap-2 h-screen bg-linear-to-b from-bg-start to-bg-end'>
        <h1 className='font-bold text-4xl leading-none'>ENEMQuest</h1>
        <p className='font-light'>Gerador de questões aleatórias do enem</p>
        <Button
          text='Gere uma questão'
          size='md'
          variant='primary'
          onClick={() => navigate('/questao')}
        />
      </main>
    </>
  )
}

export default HomePage
