import ReactMarkdown from 'react-markdown'
import './MarkdownRenderer.css'

// renderiza markdown, para a classe markdown não se espalhar pelo projeto
// caso o MarkdownRenderer mude, só precisa mudar aqui, e não em todo lugar que tem markdown
export default function MarkdownRenderer({ children }) {
  return (
    <div className='markdown'>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  )
}
