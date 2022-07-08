import React from 'react';
import "./login.css"
import Currentpage from '../pages/Currentpage';
import Search from '../pages/Search';
import { Typography } from '@material-ui/core';
import Login from './components/Login';
import Navbar from '../pages/Navbar';

function LoginPage(){

    return (
        <Typography>
            <div className='container'>
                <Navbar />
                <Search />
                <Currentpage />
                <div className='loginCreate'>
                    <h1>Login or Create an Account</h1>
                </div>
                <Login />
                <div className="footer">
                    <p>© 2022 Tatvasoft.com. All rights reserved.</p>
                </div> 
                
            </div>
        </Typography>
    );
}

export default LoginPage;