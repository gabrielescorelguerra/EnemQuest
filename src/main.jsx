import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import QuestionPage from './pages/QuestionPage.jsx'
import HomePage from './pages/HomePage'
import HistoryPage from './pages/HistoryPage.jsx'
import '@fontsource/inter'
import NotFoundPage from './pages/NotFoundPage'
import AuthPage from './pages/AuthPage'
import { AuthContextProvider } from './context/AuthContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/questao/:year/:index/:language',
    element: <QuestionPage />,
  },
  {
    path: '/history',
    element: <HistoryPage />,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
  {
    path: '/auth/:mode',
    element: <AuthPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
)
