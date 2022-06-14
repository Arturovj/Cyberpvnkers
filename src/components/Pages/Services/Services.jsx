import React from 'react'
import services from '../../../assets/services.gif'
import './Services.css'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className='services-container'>
      <motion.div initial={{ opacity : 0}}
        animate={{ opacity : 1}}
        transition={{ duration : 0.7}}
        exit={{ opacity : 0}}
        >
        <img className='services-gif' src={services}></img>
        </motion.div>
    </div>
  )
}