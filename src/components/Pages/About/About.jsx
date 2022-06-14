import React from 'react'
import about from '../../../assets/about.gif'
import './About.css'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className='about-container'>
       <motion.div initial={{ opacity : 0}}
        animate={{ opacity : 1}}
        transition={{ duration : 0.7}}
        exit={{ opacity : 0}}
        >

        <img className='about-gif' src={about}></img>
        </motion.div>
    </div>
  )
}






