import React from 'react'

const ProgressBar = ({ progress }) => {
  const colors = [
    'red', 'yellow', 'blue', 'gray'
  ]
  const randomColor=colors[Math.floor(Math.random() * colors.length)]
  return (
    <React.Fragment>
      <div className="outer-bar">
        <div className="inner-bar" style={{ width: `${progress}%`, backgroundColor: `${randomColor}` }}>

        </div>
      </div>
    </React.Fragment>
  )
}

export default ProgressBar