import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Admin from './Components/Admin'
import { Toaster } from 'react-hot-toast'
import AdminLayouts from './Layouts/AdminLayouts'
import PublicLayout from './Layouts/PublicLayout'
import Home from './Components/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<Home></Home>}></Route>
          </Route>
          <Route path='/admin' element={<AdminLayouts></AdminLayouts>}>
            <Route index element={<Admin></Admin>}></Route>
          </Route>
          <Route path='/register' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
