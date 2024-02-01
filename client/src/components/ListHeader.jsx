/* eslint-disable react/prop-types */
import React from 'react'
import '../App.css'

const ListHeader = ({ listName }) => {

    const signOut = () => {
        console.log('Signing out...')
    }

    return (
        <React.Fragment>
            <div className="list-header">
                <h1>{listName}</h1>
                <div className="btn-container">
                    <button className='create'>Add New</button>
                    <button className='signout' onClick={signOut}>Sign Out</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ListHeader