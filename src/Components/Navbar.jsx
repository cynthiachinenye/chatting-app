import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className='logo'>Lama Chat</span>
    <div className='user'>
    <img src='https://images.pexels.com/photos/15488486/pexels-photo-15488486/free-photo-of-a-black-and-white-photo-of-a-smiling-boy.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
    <span>John</span>
    <button onClick={() => signOut(auth)}>logout</button>
    </div>
      
    </div>
  )
}

export default Navbar
