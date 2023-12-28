import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type='text' placeholder='Find a user'/>
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
