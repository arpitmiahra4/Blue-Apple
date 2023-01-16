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
        <Route path="/store" element={<Store />}></Route>
        <Route path="/ipad" element={<Ipad />}></Route>
        <Route path="/iphone" element={<Iphone />}></Route>
        <Route path="/mac" element={<Mac />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
        <Route path="/test" element={<Home />}></Route>
        <Route path="*" element={<h1>Hello</h1>}></Route>
    </Routes>
  )
}

export default AllRoutes