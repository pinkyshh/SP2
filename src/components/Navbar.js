// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'


// function Navbar() {
//   return (
//       <>
//         <div className="navbar navbar-expand-lg bg-dark navbar-dark">
//             <div className="container-fluid">
//                 <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
//                     <div className="navbar-nav navbar-right"> 
//                         <Link to="/" className="nav-item nav-link active is-active" active-color="cyan">Home</Link> 
//                         <Link to="/survey" className="nav-item nav-link active is-active" active-color="cyan">Survey</Link> 
//                         <Link to="/profile" className="nav-item nav-link active is-active" active-color="cyan">SurveyQuestions</Link>
//                         <b>|</b>
//                         <button class="loginbtn" name="login">Join now</button>
//                     </div>
//                     <span className="nav-indicator"></span>
//                 </div>
//             </div>
//         </div>
//       </>
//   )
// }

import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
        {/* <NavLink to="/">
            <h1>Logo</h1>
        </NavLink> */}
        <Bars />
        <NavMenu>
            <NavLink to='/home' activeStyle>
                Home
            </NavLink>

            <NavLink to='/survey' activeStyle>
                Survey
            </NavLink>

            <NavLink to='/profile' activeStyle>
                Profile
            </NavLink>

        </NavMenu>
        {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
    </Nav>
    </>
  );
};

export default Navbar
