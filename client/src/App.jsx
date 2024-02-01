import React from 'react'
import ListHeader from './components/ListHeader'
import './App.css'

const App = () => {
  return (
    <React.Fragment>
      <div className="app">
        <ListHeader listName={'🏝️Holiday tick list'} />
      </div>
    </React.Fragment>
  )
}

export default App