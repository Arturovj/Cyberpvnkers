import React from 'react'
import contact from '../../../assets/contact.gif'
import './Contact.css'
import { motion } from 'framer-motion'
import ContactInfo from './ContactInfo'

export default function Contact() {
  return (
    <div className='contact-container'>
      <motion.div initial={{ opacity : 0}}
        animate={{ opacity : 1}}
        transition={{ duration : 0.3}}
        exit={{ opacity : 0}}
        >
        <img className='contact-gif' src={contact}></img>
        <ContactInfo/>
      </motion.div>
    </div>
  )
}