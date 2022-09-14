import React from 'react';
import './App.css';
import Form from './Component/Form';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom'
import List from './Component/List';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </>
  );
}

export default App;
