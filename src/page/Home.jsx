import React from 'react'
import CustomSwiper from '../components/CustomSwiper'
import Card from '../components/Card'
import Recent from '../components/Recent'
import OnePunch from '../assets/images/onepunch.png'






const Home = () => {
   return (
      <>

         <div className='mb-10'>
            <CustomSwiper />


         </div>

         <div className='flex justify-center gap-5'>
            <div>
               <div className='bg-blue-400 h-10 flex items-center'>
                  <img className='w-32 -translate-x-5 -translate-y-5' src={OnePunch} alt="one"/>
                  <div className='text-white text-xl -translate-x-5 font-semibold'>Movies</div>
               </div>
               <div className=' grid grid-cols-4 gap-10 border-gray-200 border-2 text-white px-4 py-8 '>
                  <Card />
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
            <div>
               <Recent />
            </div>
         </div>






      </>
   )
}

export default Home