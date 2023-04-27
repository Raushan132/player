import React from 'react'
import Card from '../components/Card'

const Anime = () => {
  return (
    <>
    <div className='flex justify-center'>

       <div className='grid grid-cols-5 gap-10 border-2 border-gray-500  px-4 py-8'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
       </div>
    </div>
    </>
  )
}

export default Anime