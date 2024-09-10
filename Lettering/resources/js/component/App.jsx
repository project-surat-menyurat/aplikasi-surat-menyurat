import React from "react";
import Router from '../router/index';
import { NavLink } from 'react-router-dom';

const App  = () => {
    return (
        <div>
            <h1>Hello App!</h1>
            <nav>
                <NavLink to="/">
                    Go to home
                </NavLink>
                <NavLink to='/about'>
                    Go to About
                </NavLink>
            </nav>
            
            <Router />
        </div>
    );

}

export default App