import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center'>

      <div className='text-white flex gap-5 w-[60%] my-10 justify-between'>
        <div>logo</div>
        <div >
          <ul className='flex gap-5 font-semibold text-xl'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/anime">Anime</Link></li>
            <li><Link to="/series">Web Series</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/contacts">Contact us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header