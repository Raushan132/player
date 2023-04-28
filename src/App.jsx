import React,{Suspense, lazy} from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Header'
const Home= lazy(()=> import('./page/Home'))
const Anime= lazy(()=> import('./page/Anime'))
const Contact= lazy(()=> import( './page/Contact'))
const Movie =lazy( ()=>import('./page/Movie'))
const Series = lazy(()=> import('./page/Series'))


function App() {

  const renderLoader = () => <p>Loading</p>;

  return (
    
    <div className='w-full h-screen  overflow-x-hidden'>
      <Header />
      <Suspense fallback={renderLoader()}>
       <Routes>
                
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/movies" element={<Movie />} />
          <Route path="/series" element={<Series />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/contacts" element={<Contact />} />
  
      
      </Routes>
      </Suspense>
    </div>
    
  )
}

export default App
