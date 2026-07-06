import MarkdownRenderer from './markdown/MarkdownRenderer'
import Alternative from './Alternative'

export default function Question({
  questionData,
  selectedAlternative,
  setSelectedAlternative,
  showAnswer,
}) {
  const {
    index,
    discipline,
    // language,
    year,
    context,
    alternativesIntroduction,
    alternatives,
  } = questionData

  const format_discipline = {
    'ciencias-humanas': 'Ciências Humanas',
    'ciencias-natureza': 'Ciências da Natureza',
    linguagens: 'Linguagens',
    matematica: 'Matemática',
  }

  return (
    <div className='max-w-200'>
      <header>
        <h1 className='font-black'>
          ENEM {year} - {format_discipline[discipline]} - Questão {index}
        </h1>
      </header>

      <section className='flex flex-col items-center gap-2 mt-2 mb-8'>
        <div className='w-full'>
          <MarkdownRenderer>{context}</MarkdownRenderer>
        </div>
        <div className='w-full'>
          <MarkdownRenderer>{alternativesIntroduction}</MarkdownRenderer>
        </div>
      </section>

      <section className='flex flex-col gap-3'>
        {alternatives?.map((alternativeData) => (
          /* ver sobre key*/
          <Alternative
            key={alternativeData.letter}
            alternativeData={alternativeData}
            selectedAlternative={selectedAlternative}
            setSelectedAlternative={setSelectedAlternative}
            showAnswer={showAnswer}
          ></Alternative>
        ))}
      </section>
    </div>
  )
}
