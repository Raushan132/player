import React from 'react'

import Anime from './page/Anime'
import Header from './Header'
import Home from './page/Home'


function App() {


  return (
    
    <div className='w-full h-screen  overflow-x-hidden'>
      <Header />
      <Home />
      <Anime />
    </div>
    
  )
}

export default App
