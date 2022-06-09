import React from 'react'
import nfts from '../../../assets/nfts.gif'
import './Nfts.css'

export default function Nfts() {
  return (
    <div className='nfts-container'>

        <img className='nfts-gif' src={nfts}></img>

    </div>
  )
}