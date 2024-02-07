/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import TickIcon from './TickIcon';
import Modal from './Modal';

const ListItem = ({ task, getData}) => {
    const [showModal, setShowModal] = useState(false)

    const deleteItem = async () => {
        try {
            const response = await fetch(`http://localhost:3000/todos/${task.id}`, {
                method: 'DELETE'
            })
            if (response.status === 200) {
                getData()
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <React.Fragment>
            <div className="list-item">
                <div className="info-container">
                    <TickIcon />
                    <p className='task-title'>{task.title}</p>
                    <ProgressBar progress={task.progress}/>
                </div>
                <div className="btn-container">
                    <button className='edit' onClick={() => { setShowModal(true) }}>Edit</button>
                    <button className='delete' onClick={deleteItem}>Delete</button>
                </div>
                {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} getData={getData} />}
            </div>
        </React.Fragment>
    )
}


export default ListItem