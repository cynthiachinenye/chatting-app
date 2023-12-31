import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';



const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    
    const email = e.target[0].value;
    const password = e.target[1].value;
 


    try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/")

    } catch (err) {
      console.log(err)
      setErr(true);
    }
  }



  return (
    <div className='formContainer'>

    <div className='formWrapper'>
    <span className='logo'>Lama Chat</span>
    <span className='title'>Login</span>
    <form onSubmit={handleClick}>
    <input type='email' placeholder='email'/>
    <input type='password' placeholder="password"/>
    <button>Sign In</button>
    {err && <span>Something Went Wrong !</span>}
    </form>
    <p> you don't  have an account? <Link to="/register" >Register </Link> </p>
    
    </div>
      
    </div>
  )
}

export default Login
