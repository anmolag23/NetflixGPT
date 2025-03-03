import React from 'react'

const VedioTitle = ({title, overview}) => {
  return (
    <div className='movie'>
        <h1 className='title'>{title}</h1>
        <p className='content'>{overview}</p>
        <div >
            <button className='play'> ▶ Play</button>
            <button className='more_info'>ℹ  More info</button>
        </div>
    </div>
  )
}

export default VedioTitle