import React from 'react'
import Image from 'next/image'
const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <Image src="spinner.svg" 
      alt="loading ..... " width={300} height={300}/>
    </div>
  )
}

export default Loading