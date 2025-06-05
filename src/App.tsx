import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import './App.css'
import RootLayout from './Layouts/RootLayout'
import AuthLayout from './Layouts/AuthLayout'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about-us' element={<Aboutus />} />

      </Route>
      <Route path='/auth'  element={<AuthLayout />}>
      <Route index element={<Login />} />
      <Route path='signup' element = {<Signup />} />
      </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )

}

export default App
