import { motion } from 'framer-motion';
import React from 'react'
import rog from '../../assets/rog.mp4'
import Title from './Title'

export const Main = () => {
  return (
    <div className='main'>
        <motion.div initial={{ opacity : 0}}
        animate={{ opacity : 1}}
        transition={{ duration : 1}}
        exit={{ opacity : 0}}
        >
        <video src={rog} autoPlay loop muted></video>
            <Title/>
            </motion.div>
    </div>
  )
}
