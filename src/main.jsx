import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import TaskPage from './pages/TaskPage.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/task',
    element: <TaskPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)