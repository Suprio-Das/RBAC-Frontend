import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
