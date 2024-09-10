import React from 'react'
import {Routes, Route} from 'react-router-dom'

import HomePage from '../component/homepage';
import AboutUs from '../component/aboutus';
import NotFound from '../component/notfoundpage';

const index = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutUs />}/>
                <Route path="/*" element={<NotFound />}/>
                </Routes>
        </div>

    )
}

export default index