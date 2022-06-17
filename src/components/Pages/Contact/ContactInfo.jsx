import React from 'react'
import './Contact-info.css'
import email from '../../../assets/email.png'
import github from '../../../assets/github.png'
import linkeding from '../../../assets/linkedin.png'

export default function ContactInfo() {
  return (
      <div className='contact-info'>
    <div>ContactInfo</div>
    <div className='email'><img className='email-icon' src={email}></img>email@hotmail.com</div>
    <div className='github'><img className='github-icon' src={github}></img>ArturoVj</div>
    <div className='linkedin'><img className='linkedin-icon' src={linkeding}></img> Linkedin:Arturo Vivar</div>
    </div>
  )
}
