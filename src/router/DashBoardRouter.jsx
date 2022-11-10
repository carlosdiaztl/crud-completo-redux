import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

const DashBoardRouter = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default DashBoardRouter