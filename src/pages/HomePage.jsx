import { useNavigate } from 'react-router-dom'
import Button from '@/components/Button'
import { generateRandomQuestionQuery } from '@/services/questionsService'

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <main className='flex flex-col items-center justify-center gap-3 h-screen bg-linear-to-b from-bg-start to-bg-end'>
        <h1 className='font-bold text-4xl leading-none'>ENEMQuest</h1>
        <p className='font-light'>Gerador de questões aleatórias do enem</p>
        <Button
          size='md'
          variant='primary'
          onClick={() => navigate(`/questao/${generateRandomQuestionQuery()}`)}
        >
          Gere uma questão
        </Button>
      </main>
    </>
  )
}

export default HomePage
