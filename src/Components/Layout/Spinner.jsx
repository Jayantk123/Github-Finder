import React from 'react'
import spinner from './assets/spinner.gif'

export default function Spinner() {
  return (
    <div className='mt-20'>
    <img
      width={180}
      className='text-center mx-auto'
      src={spinner}
      alt='Loading...'
    />
  </div>
  )
}
