// import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';


function App() {


  return (
    <>

      <Router>
        <main>
          <Routes>
            {/* Set up a route with an empty path to display HomePage */}
            <Route path="/" element={<HomePage />} />


            {/* Define other routes for your application */}
            {/* ... */}
          </Routes>
        </main>
      </Router>

    </>
  )
}

export default App
