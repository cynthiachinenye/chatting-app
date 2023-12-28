import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className='logo'>Lama Chat</span>
    <div className='user'>
    <img src='https://images.pexels.com/photos/15488486/pexels-photo-15488486/free-photo-of-a-black-and-white-photo-of-a-smiling-boy.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
    <span>John</span>
    <button>logout</button>
    </div>
      
    </div>
  )
}

export default Navbar
