import './App.css';
import Nav from './components/nav.jsx';
import Signin from './components/signin.jsx';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <div style={{ paddingTop: 96 }}>CAREER LAUNCHPAD</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;