import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/home';
import Room from './Components/Room/room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomid" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
