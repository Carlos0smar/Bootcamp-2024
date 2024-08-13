import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../components/pages/App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Template><App /></Template>,
  },

  {
    path: '/about',
    element: <About/>,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
