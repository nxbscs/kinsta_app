import React, { useState } from 'react'
import '../App.css'
import Modal from './Modal'
import { useCookies } from 'react-cookie';

// eslint-disable-next-line react/prop-types
const ListHeader = ({ listName, getData }) => {
    const [showModal, setShowModal] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [cookie, setCookie, removeCookie] = useCookies(null)

    const signOut = () => {
        console.log('Signing out...')
        removeCookie('Email')
        removeCookie('AuthToken')
        
        window.location.reload()
    }

    return (
        <React.Fragment>
            <div className="list-header">
                <h1>{listName}</h1>
                <div className="btn-container">
                    <button className='create' onClick={() => setShowModal(true)}>Add New</button>
                    <button className='signout' onClick={signOut}>Sign Out</button>
                    {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData} />}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ListHeader