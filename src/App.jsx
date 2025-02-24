import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'
import AuthProvider from './Providers/AuthProvider'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root/> } >
        <Route index element={ <Home/> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/registration' element={ <Registration /> } />
      </Route>
    )
  )

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
