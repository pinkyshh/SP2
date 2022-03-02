import React from 'react'
import './assets/css/main.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Survey from './components/Survey.js'
import SurveyQuestions from './components/SurveyQuestions';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="survey" element={<Survey />} />
        <Route path="profile" element={<SurveyQuestions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
