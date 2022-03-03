import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
      <>
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav navbar-right"> 
                        <Link to="/" className="nav-item nav-link active is-active" active-color="cyan">Home</Link> 
                        <Link to="/survey" className="nav-item nav-link active is-active" active-color="cyan">Survey</Link> 
                        <Link to="/profile" className="nav-item nav-link active is-active" active-color="cyan">Profile</Link>
                        <b>|</b>
                        <button className="loginbtn" name="login">Join now</button>
                    </div>
                    <span className="nav-indicator"></span>
                </div>
            </div>
        </div>
      </>
  )
}

export default Navbar;