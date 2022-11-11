import React from 'react'
import Home from '../components/Home/Home'
import { Route, Routes } from "react-router-dom";



const DashBoardRouter = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default DashBoardRouter