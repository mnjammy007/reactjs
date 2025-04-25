import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, About, Contact, User, GitHub } from './components/index.js'
import { githubInfoLoader } from './components/GitHub/GitHub.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       }
//     ]
//   },
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* <Route index element={<Home />} />  this is the same as below */}
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github'
      element={<GitHub />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
