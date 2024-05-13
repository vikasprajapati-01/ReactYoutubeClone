import React, { useState } from 'react'

import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'

import Navbar from './Components/Navbar/Navbar.jsx'

import { Routes , Route } from 'react-router-dom'

function App() {

  const [sidebar, setSidebar] = useState(true);
  const [selectRegion, setSelectRegion] = useState('US');

  return (
    <>
        <Navbar setSidebar = {setSidebar} setSelectRegion={setSelectRegion}/>
        <Routes>
          <Route path='/' element={<Home sidebar = {sidebar} selectRegion={selectRegion} />} />
          <Route path='/video/:categoryId/:videoId' element={<Video selectRegion={selectRegion}/>} />
        </Routes>
    </>
  )
}

export default App
