import { getQuestion } from '@/api/api'
import Question from '@/components/Question'
import { useNavigate } from 'react-router-dom'
import { generateRandomQuestionQuery } from '@/services/questionsService'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/Button'

import { History, Moon } from 'lucide-react'

function QuestionPage() {
  // useStates
  const [questionData, setQuestionData] = useState({}) // pega os dados da questão
  const [selectedAlternative, setSelectedAlternative] = useState('') // marca se alguma alternativa está selecionada
  const [showAnswer, setShowAnswer] = useState(false) // marca se está mostrando a resposta
  const [loading, setLoading] = useState(true) // marca se a questão ainda está carregando

  // navegação
  const navigate = useNavigate()
  const { year, index, language } = useParams()

  // pega a questão
  useEffect(() => {
    // só mostra o loading se a questão demorar mais de 150ms para carregar
    const timer = setTimeout(() => {
      setLoading(true)
    }, 150)

    async function loadQuestion() {
      const data = await getQuestion(year, index, language == 'e' ? 'espanhol' : 'ingles')
      setQuestionData(data)
      setLoading(false)
    }
    loadQuestion()
    clearTimeout(timer)
  }, [year, index, language])

  return (
    <div className='flex flex-col gap-8 bg-fixed bg-linear-to-b from-bg-start to-bg-end pt-2 pb-10 px-4'>
      <header className='flex flex-row justify-between items-center'>
        <Link
          to={'/'}
          className='text-text transition duration-500 hover:text-primary-end hover:cursor-pointer'
        >
          <h1 className='font-bold'>EnemQUEST</h1>
        </Link>
        <div className='flex gap-2'>
          <Link
            to={'/auth/login'}
            className='text-text transition duration-500 hover:text-primary-end hover:cursor-pointer'
          >
            <History className='h-10' />
          </Link>
          <button className='text-text transition duration-500 hover:text-primary-end hover:cursor-pointer'>
            <Moon className='h-10' fill='currentColor' strokeWidth={0} />
          </button>
        </div>
      </header>
      {loading ? (
        <p className='flex items-center justify-center w-screen h-screen'>Carregando questão...</p>
      ) : (
        <main className='flex flex-col items-center gap-8 min-h-screen w-full'>
          <Question
            questionData={questionData}
            selectedAlternative={selectedAlternative}
            setSelectedAlternative={setSelectedAlternative}
            showAnswer={showAnswer}
          ></Question>
          <div className='flex flex-row gap-4 justify-center'>
            {!showAnswer && (
              <Button variant='primary' onClick={() => setShowAnswer(true)}>
                Gabarito
              </Button>
            )}
            <Button
              variant='secondary'
              onClick={() => {
                navigate(`/questao/${generateRandomQuestionQuery()}`)
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
                setSelectedAlternative('')
                setShowAnswer(false)
              }}
            >
              Gere outra questão{' '}
            </Button>
          </div>
        </main>
      )}
    </div>
  )
}
export default QuestionPage
