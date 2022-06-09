import React from 'react'
import services from '../../../assets/services.gif'
import './Services.css'

export default function Services() {
  return (
    <div className='services-container'>

        <img className='services-gif' src={services}></img>

    </div>
  )
}