import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Signup from './Components/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
