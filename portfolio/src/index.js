import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Amthal from './components/Amthal';
import { BrowserRouter, Route, Routes } from "react-router";
import Header from './components/Header';
import Gallery from './components/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/amthal" element={<Amthal />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
