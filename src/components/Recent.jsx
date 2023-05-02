import React from 'react'
import perry from '../assets/images/perry.png'

const Recent = () => {
  return (
    <>
    <div className='bg-blue-400 text-white px-2 flex justify-between items-center'>
        <div className='text-xl'>Recent Added</div>
        <img className="w-16" src={perry} alt="perry"/>
    </div>
    <div className='text-white self-baseline border-2 w-64 px-4 flex flex-col gap-2'>
       <div> <a href="#">Harry Potter 1</a></div>
       <div> <a href="#">hello who are you what are you doing there are some thing</a></div>
       <div> <a href="#">hello who are you what are you doing there are some thing</a></div>
    
    </div>
    </>
  )
}

export default Recent