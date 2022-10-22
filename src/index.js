import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route element={<App/>} path="/" />
    <Route element={<Contact/>} path="contact"/>
  </Routes>
  </BrowserRouter>
);
