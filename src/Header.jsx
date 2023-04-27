import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center'>

      <div className='text-white flex gap-5 w-[60%] my-10 justify-between'>
        <div>logo</div>
        <div >
          <ul className='flex gap-5 font-semibold text-xl'>
            <li><a href="">Home</a></li>
            <li><a href="">Anime</a></li>
            <li><a href="">Web Series</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header