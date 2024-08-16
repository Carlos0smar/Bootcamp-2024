import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../components/pages/App.tsx'
// import About from '../components/pages/About.tsx'
import Template from '../components/templates/Temaplate.tsx'
// import Contact from '../components/pages/contacts.tsx'
// import templa
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { contactLoader } from './ContactsLoader.ts'

// const App = lazy(() => import('../components/pages/App.tsx'))
const About = lazy(() => import('../components/pages/About.tsx'))
const Contact = lazy(() => import('../components/pages/contacts.tsx'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Template><App /></Template>,
  },

  {
    path: '/about',
    element: <Template><About/></Template>,
  }
  ,
  {
    path: '/contact',
    element: <Template><Contact/></Template>,
    loader: contactLoader,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h3>Loading...</h3>}>
      <RouterProvider router={routes}/>
    </Suspense>
  </StrictMode>,
)
