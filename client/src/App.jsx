/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ListHeader from './components/ListHeader'
import './App.css'
import ListItem from './components/ListItem';
import Modal from './components/Modal';
import TickIcon from './components/TickIcon';
import ProgressBar from './components/ProgressBar';
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookie,setCookie,removeCookie]=useCookies(null)
  const authToken=cookie.authToken
  const userEmail = cookie.userEmail
  const [tasks, setTasks] = useState(null)

  const getData = async () => {
    try {
      // const response = await fetch(`http://localhost:3000/todos/${userEmail}`)
      const response = await fetch(`http://localhost:3000/todos`)
      const json = await response.json()
      // console.log(json)
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  //without the empty dependency, the function will be executed  infintely
  useEffect((authToken) => {
    if (authToken) {
      getData
    }
  }, [])

  console.log(tasks)
  //sort the tasks by date
  const sortedTasks = tasks?.sort((a, b) => {
    new Date(a.date) - new Date(b.date)
  })

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken &&
        <>
          <ListHeader listName={'🏝️Holiday tick list'} getData={getData} />
          <p className="user-email">Welcome back{userEmail}</p>
          {sortedTasks?.map(task => (
            <ListItem key={task.id} task={task.title} getData={getData} />
          ))}
        </>
      }
      <p className='copyright'>&copy;Niyonsaba Brian LLC</p>
    </div>
  )
}

export default App