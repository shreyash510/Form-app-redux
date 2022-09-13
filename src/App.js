import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Component/Form';
import Navbar from './Component/Navbar';
import Show from './Component/Show';

function App() {
  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column justify-content-center">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
