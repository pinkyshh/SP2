import React from 'react'
import './assets/css/main.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Survey from './components/Survey.js'
import SurveyQuestions from './components/SurveyQuestions';
import Profile from './components/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="survey" element={<Survey />} />
        <Route path="surveys/:id" element={<SurveyQuestions/>} />
        <Route path="profile" element={<Profile/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
