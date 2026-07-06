import MarkdownRenderer from './markdown/MarkdownRenderer'

export default function Alternative({
  alternativeData,
  selectedAlternative,
  setSelectedAlternative,
  showAnswer,
}) {
  const { letter, text, file, isCorrect } = alternativeData

  const variant = (() => {
    if (showAnswer && isCorrect) return 'correct' // se ta certa
    if (selectedAlternative !== letter) return 'unselected' // ta errada e nao foi selecionada
    if (showAnswer) return 'wrong' // errada, foi selecionada e pediu pra mostrar
    return 'selected'
  })()

  const variantClasses = {
    unselected:
      'text-text from-bg-start to-bg-end shadow-secondary hover:from-bg-end hover:to-bg-start hover:shadow-secodary-hover',
    selected: 'text-white from-primary-start to-primary-end shadow-primary',
    correct: 'text-white from-correct-start to-correct-end shadow-correct',
    wrong: 'text-white from-wrong-start to-wrong-end shadow-wrong',
  }

  const onlyNumberDot = text ? /^\d+\.$/.test(text.trim()) : ''

  return (
    <>
      {/* depois tentar fazer isso ser uma variante de button e ver um pra active*/}
      <button
        className={`py-3 px-5 text-base bg-linear-to-b rounded-full transition duration-500 hover:cursor-pointer
                    ${variantClasses[variant]}`}
        onClick={() => {
          if (!showAnswer) {
            selectedAlternative == letter
              ? setSelectedAlternative('')
              : setSelectedAlternative(letter)
          }
        }}
      >
        <span className='flex flex-row gap-2'>
          {letter + ')'}
          {onlyNumberDot ? '  ' + text : <MarkdownRenderer>{text}</MarkdownRenderer>}
          {file ? <MarkdownRenderer>{`![](${file})`}</MarkdownRenderer> : ''}
        </span>
      </button>
    </>
  )
}
