import React, { useState } from 'react';
import './App.css';
import Search from './components/images/search';
import StickyPage from './components/stickyPage';
import Login from './components/Login';
import { isJsxElement } from 'typescript';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Search/>} />
            <Route path="/" element={<StickyPage/>} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </>
    </BrowserRouter>
  );
}

export default App;
