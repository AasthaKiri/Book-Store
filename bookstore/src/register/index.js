// import logo from './logo.svg';
import React from 'react';
import Navbar from '../pages/Navbar';
// import Currentpage from '../pages/Currentpage'
import Register from './components/Register';
import "./register.css";
import Search from '../pages/Search';


function RegisterPage () {

  return (
    
    <div className='container'>
      <Navbar />
      <Search />
      {/* <Currentpage /> */}
      <div className="loginCreate">
        <h1>Create an Account</h1>
      </div>
      <Register />
      <div className="footer">
        <p>© 2022 Tatvasoft.com. All rights reserved.</p>
      </div>
    </div>
  );
}

export default RegisterPage;