import React from 'react'
import './Contact-info.css'
import email from '../../../assets/email.png'
import github from '../../../assets/github.png'

export default function ContactInfo() {
  return (
      <div className='contact-info'>
    <div>ContactInfo</div>
    <div className='email'><img className='email-icon' src={email}></img>email@hotmail.com</div>
    <div className='github'><img className='github-icon' src={github}></img>Github</div>
    <div>Linkedin:Linkedin</div>
    </div>
  )
}
