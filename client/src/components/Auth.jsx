/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {useCookies} from 'react-cookie'

const Auth = () => {
    // eslint-disable-next-line no-unused-vars
    const [IsLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [cookie,setCookie,removeCookie]=useCookies(null)
    const [error, setError] = useState(null)

    console.log(email, password, confirmPassword);
    console.log(cookie);

    const viewLogin = (status) => {
        setError(null)
        setIsLogin(status)
    }

    const handleSubmit = async (e, endpoint, IsLogin) => {
        e.preventDefault()
        if (!IsLogin && password !== confirmPassword) {
            setError('Make sure passwords match')
            return
        }

        const response = await fetch(`https://localhost:3000/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json();
        if (data.detail) {
            setError(data.detail)
        }else{
            setCookie('Email',data.email)
            setCookie('AuthToken',data.token)

            window.location.reload()
        }

    }
    return (
        <React.Fragment>
            <div className="auth-container">
                <div className="auth-container-box">
                    <form action="">
                        <h2>{IsLogin ? 'Please login' : 'Please signup'}</h2>
                        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        {!IsLogin && <input type="password" placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)} />}
                        <input type="submit" className='create' onClick={(e) => handleSubmit(e, IsLogin ? 'login' : 'signup')} />
                        {error && <p>{error}</p>}
                    </form>
                    <div className="auth-options">
                        <button onClick={() => viewLogin(false)} style={{ backgroundColor: !IsLogin ? 'rgb(255,255,255)' : 'rgb(188,188,188)' }}>Sign Up</button>
                        <button onClick={() => viewLogin(true)} style={{ backgroundColor: IsLogin ? 'rgb(255,255,255)' : 'rgb(188,188,188)' }}>Login</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Auth