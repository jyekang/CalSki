import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Resorts from './Resorts.jsx'
import ResortsDetail from './ResortsDetail.jsx'
import Plans from './Plans.jsx'
import WebsiteReview from './websiteReview.jsx'

const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/resorts' element={<Resorts />} />
                <Route path='/resorts/:id' element={<ResortsDetail />} />
                <Route path='/plans' element={<Plans />} />
                <Route path='/websiteReview' element={<WebsiteReview />} />
            </Routes>
        </div>
    )
}

export default Main