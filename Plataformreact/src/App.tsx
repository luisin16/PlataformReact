import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Start from './Components/Start'

function App() {
  return (
    <div>
        <div className="header">
          <h1>JBL Systems</h1>
        </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>}></Route>
      <Route path='/adminlogin' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter> 
    </div> 
    
  )
}

export default App
