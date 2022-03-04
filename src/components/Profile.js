import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import aboutImage from '../assets/images/about-image.jpg'
import { auth } from './firebase-config'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Profile(){   
    const auth = getAuth();
    const user = auth.currentUser;

    const signOutWithGoogle = ()=>{
        signOut(auth).then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const signInWithGoogle = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    if(user !== null){
        return (
            <div>
                <section id="profile" className="parallex-section"></section>
                {/* <!-- PROFILE DETAIL SECTION --> */}
                <section id="profile_detail" className="parallax-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                                        <img src={user.photoURL} alt="User Profile Picture" className='profile-wrapper'/>
                                    <h2><b>{user.displayName}</b></h2>
                                    <p>{user.email}</p>
                                    <button className="signOutbtn" name="signOut" onClick={signOutWithGoogle}>Sign Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--PROFILE DETAIL 2--> */}
                <section id="prof" className="parallax-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                {/* <!-- SECTION TITLE --> */}
                                <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                                    <br></br>
                                    <h2>My Dashboard</h2>
                                </div>
                            </div>

                            <div className="profile2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                                        <div className="profile2-item">
                                            <h3>Survey Answered</h3>
                                            <p>100</p>
                                        </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="profile2-item">
                                                <h3>Your Rewards</h3>
                                                <p>0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                        </div>
                </section>
            </div>
        )
    }else{
        return (
            <div>
                <section id="profile" className="parallex-section"></section>
    
                <section id="profile_detail" className="parallax-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.6s">  
                                <div className='profile-wrapper'></div>
                                    <h4>Be a part of Our Community</h4>
                                    <p>Click the button below to Sign Up</p>
                                    {/* <Link to="/" className="singInbtn"name="signIn" onClick={signInWithGoogle}>Sign In</Link> */}
                                    <button className="signInbtn" name="signIn" onClick={signInWithGoogle}>Sign In</button>
                                </div>
                            </div>   
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Profile