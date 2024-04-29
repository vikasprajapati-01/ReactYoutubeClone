import React, { useState } from 'react'

import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'

import Navbar from './Components/Navbar/Navbar.jsx'

import { Routes , Route } from 'react-router-dom'

function App() {

  const [sidebar, setSidebar] = useState(true);

  return (
    <>
        <Navbar setSidebar = {setSidebar}/>
        <Routes>
          <Route path='/' element={<Home sidebar = {sidebar} />} />
          <Route path='/video/:categoryId/:videoId' element={<Video />} />
        </Routes>
    </>
  )
}

export default App
