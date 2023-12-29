import './style.scss'
import Register from "./Pages/Register"
import Login from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from './Components/context/AuthContext';
import {useContext} from 'react';

function App() {

  const {currentUser} = useContext(AuthContext)
console.log(currentUser)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
