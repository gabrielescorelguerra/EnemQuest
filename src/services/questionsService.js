// formato XXXX-XX-e
export function generateRandomQuestionQuery() {
  // depois trocar 2012 por 2009, mas corrigir erro com lingua em 2009 e 2011
  // e trocar 2023 por 2025, pois ta com erro nas linguas pra 2024 tambem
  const year = Math.floor(Math.random() * (2023 - 2012 + 1)) + 2012
  const index = Math.floor(Math.random() * 180) + 1
  const language = Math.random() < 0.5 ? 'i' : 'e'

  return `${year}/${index}/${language}`
}
