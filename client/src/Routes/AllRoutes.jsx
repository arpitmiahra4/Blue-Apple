import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Ipad from '../Pages/Ipad'
import Iphone from '../Pages/Iphone'
import Mac from '../Pages/Mac'
import Store from '../Pages/Store'
import Watch from '../Pages/Watch'



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Store />}></Route>
        <Route path="/" element={<Ipad />}></Route>
        <Route path="/" element={<Iphone />}></Route>
        <Route path="/" element={<Mac />}></Route>
        <Route path="/" element={<Watch />}></Route>
        <Route path="/test" element={<Home />}></Route>
        <Route path="*" element={<h1>Hello</h1>}></Route>
    </Routes>
  )
}

export default AllRoutes