import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Resorts from './Resorts'
import ResortsDetail from './ResortsDetail'
import MyFavorites from './MyFavorites'

const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/resorts' element={<Resorts />} />
                <Route path='/resorts/:id' element={<ResortsDetail />} />
                <Route path='/myfavorites' element={<MyFavorites />} />
            </Routes>
        </div>
    )
}