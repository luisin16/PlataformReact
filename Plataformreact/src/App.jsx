import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Dashboard } from './Components/Dashboard'
import Registrarse from './Components/Registrarse'
import Start from './Components/Start'
import UsersLogin from './Components/UsersLogin'
import { PrivateRoute } from './Components/PrivateRoute'
import { Users } from './Components/Users'
import AddUsers from './Components/AddUsers'
import { EditUsers } from './Components/EditUsers'

function App() {
  return (
    <div>
        <div className="header">
          <h1>JBL Systems</h1>
        </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/users_login' element={<UsersLogin />}></Route>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
      <Route path='/users' element={<Users />}></Route>      
      <Route path='/registrarse' element={<Registrarse />}></Route>
      <Route path='/add_users' element={<AddUsers />}></Route>
      <Route path='/edit_users/:id' element={<EditUsers />}></Route>
    </Routes>
    </BrowserRouter> 
    </div> 
    
  )
}

export default App
