/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useCookies } from 'react-cookie';


const Modal = ({ mode, setShowModal, getData, task }) => {
    // const mode = 'create'
    const [cookie,setCookie,removeCookie]=useCookies(null)
    const editMode = mode === 'edit';

    const [data, setData] = useState({
        user_email: editMode ? task.user_email : cookie.Email,
        title: editMode ? task.title : null,
        progress: editMode ? task.progress : null,
        date: editMode ? "" : new Date()
    })

    const postData = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            if (response.status === 200) {
                setShowModal(false)
                getData()
            }
        } catch (error) {
            console.error(error);
        }
    }

    const editData = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/todos/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            if (response.status === 200) {
                console.log('Worked');
                setShowModal(false)
                getData()
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        console.log("change detected");
        const { name, value } = e.target

        setData(data => ({
            ...data,
            [name]: value
        }))
        console.log(data);
    }
    return (
        <React.Fragment>
            <div className="overlay">
                <div className="modal">
                    <div className='form-title-container'>
                        <h3>Let&apos;s {mode} you task</h3>
                        <button onClick={() => setShowModal(false)}>X</button>
                    </div>

                    <form >
                        <input
                            required
                            maxLength={30}
                            placeholder='Your task goes here'
                            name='title'
                            value={data.title}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor="range">Drag to show your progress</label>
                        <input
                            required
                            type='range'
                            id='range'
                            min="0"
                            max="100"
                            name='progress'
                            value={data.progress}
                            onChange={handleChange}
                        />
                        <br />
                        <input className={mode} type='submit' onClick={editMode ? "" : postData} />
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal