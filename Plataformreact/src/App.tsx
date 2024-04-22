import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Dashboard } from './Components/Dashboard'
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
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
    </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default App
