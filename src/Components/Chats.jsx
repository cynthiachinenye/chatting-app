import React, { useState } from 'react'
import { useEffect, useContext } from 'react'
import { doc, onSnapshot, } from "firebase/firestore"
import { db } from '../Firebase'
import { AuthContext } from './context/AuthContext'

const Chats = () => {
    const [chat, setChat] = useState([])

    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChat(doc.data())
            })

            return () => {

                unsub();
            };
        };
        currentUser.uid && getChats()

    }, [currentUser.uid]);
    console.log(Object.entries(chat))
    return (
        <div className='chats'>
            {Object.entries(chat)?.map((chat) => (
                <div className='userChat' key={chat[0]} >
                    <img src={chat[1].userInfo.photoURL} alt='' />
                    <div className='userChatInfo'>
                        <span>{chat[1].displayName}</span>
                        <p> {chat[1].userInfo.lastMessage?.text} </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chats
