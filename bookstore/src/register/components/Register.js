// import PropTypes from 'prop-types'
import React, { useState } from "react";

function Register() {

  const [fname , setFname] = useState("")
  const [lname , setLname] = useState("")
  const [roleid , setRoleid] = useState("")
  const [password , setPassword] = useState("")
  const [email , setEmail] = useState("")
  
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {fname,lname,email,roleid,password}
      const response = await fetch(" http://localhost:5000/api/user/add" , {method:"POST" , headers:{"Content-Type" :"application/json"}, body:JSON.stringify(body)} )
      console.log(response);
    } 
    
    catch (err) {
      console.error(err.message);
    }
  }  

  return (
    <div className="register">
      <h2>Personal Information</h2>
      <p>Please enter the following information to create your account.</p>
      <form action="" className="personalInfo" onSubmit={onSubmitForm}>
        <div className="flex">
          <div className="name">
            <p>First Name *</p>
            <input type="text" id="fname" required onChange={(e) => {setFname(e.target.value)}}value={fname}  />
          </div>
          <div className="name">
            <p>Last Name *</p>
            <input type="text" id="lname" required onChange={(e) => {setLname(e.target.value)}}value={lname}/>
          </div>
        </div>
        <div className="flex">
          <div className="name">
            <p>Roles *</p>
            <select id="roleid" required onChange={(e) => {setRoleid(e.target.value)}}value={roleid}>
              <option value="2">Seller</option>
              <option value="3">Buyer</option>
            </select>
          </div>
          <div className="name">
            <p>Password *</p>
            <input type="password" id="password" required onChange={(e) => {setPassword(e.target.value)}}value={password} />
          </div>
        </div>
        <div className="name">
          <p>Email Address *</p>
          <input type="email" id="email" required onChange={(e) => {setEmail(e.target.value)}}value={email} />
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        
      </form>
      {/* <h2 className="loginH2">Login Information</h2>
      <form action="" className="loginPass">
        <div className="flex">
         
          <div className="name">
            <p>Confirm Password *</p>
            <input type="text" id="confirm-password" />
          </div>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form> */}
      {/* {books.map((b) => (
        <div key={b.id}>
          <div>{b.name}</div>
          <div>{b.price}</div>
        </div>
      ))} */}
    </div>
  );
}

export default Register;
