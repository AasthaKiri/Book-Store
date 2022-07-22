// import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function Login(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [login ,setLogin] = useState("")
    // const [status,setStatus] = useState(false)

    const onSubmitForm = async e => {
        e.preventDefault();
        const body = {email,password}
        try {
          const response = await fetch("http://localhost:5000/api/public/login" , {method:"POST" , headers:{"Content-Type" :"application/json"}, body:JSON.stringify(body)})
          .then((data) => data.json())
          .then((list) => {
            if (list.length>0)
            {
            setLogin(alert("Logged in Sucessfully"))
            window.location="http://localhost:3000/books"
            }
            else{
                alert("Try Again")
            }
        })
        } 
        catch (err) {
          console.error(err.message);
        }
      }  
    

        return (
            <div className="contain">
                <div className="box">
                    <div className="title">New Customer</div>
                    <hr />
                    <div className="des">Registration is free and easy</div>
                    <div className="points">
                        <div className="pt">&#9679;&nbsp;Faster checkout</div>
                        <div className="pt">&#9679;&nbsp;Save multiple shipping addresses</div>
                        <div className="pt">&#9679;&nbsp;View and track orders and more</div>
                    </div>
                    <button className="regBtn" ><Link to='/register'>Create New Account</Link></button>
                </div>
                <div className="box">
                    <div className="title">Registered Customers</div>
                    <hr />
                    <div className="des">If you have an account with us, please log in.</div>
                    <form action="" onSubmit={onSubmitForm}>
                    {login}
                    
                        <div className="loginInput">Email Address *</div>
                        <input type="email" className="email" id='email' onChange={(e) => {setEmail(e.target.value)}}value={email} />
                        <div className="loginInput">Password *</div>
                        <input type="password" id='password' onChange={(e) => {setPassword(e.target.value)}}value={password} />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }


export default Login