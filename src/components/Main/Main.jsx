import React from 'react'
import rog from '../../assets/rog.mp4'

export const Main = () => {
  return (
    <div className='main'>
        <video src={rog} autoPlay loop muted></video>
    </div>
  )
}
