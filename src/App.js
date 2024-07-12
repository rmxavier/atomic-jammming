import { AboutPage, PlaylistManagerPage, LoginPage } from './pages';
import SpotifyApi from './utils/SpotifyApi';
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  const [ auth, setAuth ] = useState({
    token: '',
    expiresIn: 0,
    isAuthenticated: false
  })

  useEffect(()=> { console.log(`Auth: ${auth.token}`)});

  // Routes
  return (
    <><Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/playlist-manager" element={<PlaylistManagerPage setAuth={setAuth} auth={auth} />} />
        <Route path="/login" element={<LoginPage setAuth={setAuth} auth={auth} />} />
      </Routes>
    </Router>
    <input value={auth.token} />
    <input value={auth.expiresIn} />
    <input value={auth.isAuthenticated} />
    </>
  );
}

export default App;