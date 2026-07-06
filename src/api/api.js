// fetch da API
const BASE_URL = import.meta.env.VITE_API_URL

// retorna array com edições do ENEM
export async function getExams() {
  try {
    const response = await fetch(`${BASE_URL}/exams`, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getQuestion(year, index, language) {
  try {
    const response = await fetch(
      `${BASE_URL}/exams/${year}/questions/${index}?language=${language}`,
      {
        method: 'GET',
      }
    )
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}
