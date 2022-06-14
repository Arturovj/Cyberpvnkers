import React from 'react'
import nfts from '../../../assets/nfts.gif'
import './Nfts.css'
import { motion } from 'framer-motion'

export default function Nfts() {
  return (
    <div className='nfts-container'>
      <motion.div initial={{ opacity : 0}}
        animate={{ opacity : 1}}
        transition={{ duration : 0.7}}
        exit={{ opacity : 0}}
        >

        <img className='nfts-gif' src={nfts}></img>
        </motion.div>
    </div>
  )
}