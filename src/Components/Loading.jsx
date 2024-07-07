import React from 'react'
import ReactLoading from 'react-loading'

function Loading() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <ReactLoading type="spin" color="#C084FC" height={'5%'} width={'5%'} /></div>
  )
}

export default Loading