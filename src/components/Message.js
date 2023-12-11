import React from 'react'

export default function Message({message}) {
  return (
    <p className='message'>
      <span>{message}</span>
    </p>
  )
}
