import React, { useState } from 'react'

const Search = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)
    const handleSubmit = e =>{}
    const handleKey = e => {
        e.code=== "Enter" && handleSubmit()
    }
    return ( 
        <div className='search'>
            <div className='searchForm'>
                <input type='text' placeholder='Find a user'  onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}/>
            </div>
            <div className='userChat'>
                <img src='https://images.pexels.com/photos/19153152/pexels-photo-19153152/free-photo-of-a-person-standing-on-top-of-a-rock-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <div className='userChatInfo'>
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search
