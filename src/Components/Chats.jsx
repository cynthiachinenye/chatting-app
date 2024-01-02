import React, { useState } from 'react'

const Chats = () => {
    const [chat,setChat] = useState()
    return (
        <div className='chats'>
            <div className='userChat'>
                <img src='https://images.pexels.com/photos/19153152/pexels-photo-19153152/free-photo-of-a-person-standing-on-top-of-a-rock-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='userChat'>
                <img src='https://images.pexels.com/photos/19153152/pexels-photo-19153152/free-photo-of-a-person-standing-on-top-of-a-rock-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='userChat'>
                <img src='https://images.pexels.com/photos/19153152/pexels-photo-19153152/free-photo-of-a-person-standing-on-top-of-a-rock-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats
