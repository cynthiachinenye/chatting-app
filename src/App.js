import './style.scss'
import Register from "./Pages/Register"
import Login from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from './Components/context/AuthContext';
import {useContext} from 'react';
import { Navigate } from 'react-router-dom';
function App() {

  const {currentUser} = useContext(AuthContext)

 const ProtectedRoute = ({children})=> {
  if(!currentUser){
     return <Navigate to="/login"/>
  }
  return children
 }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
