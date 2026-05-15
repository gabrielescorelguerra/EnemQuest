// fetch da API

export async function getExams() {
  fetch('https://api.enem.dev/v1/exams').then((response) => response.json)
}
