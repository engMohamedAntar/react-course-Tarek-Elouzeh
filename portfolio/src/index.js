import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Amthal from './components/Amthal';
import { BrowserRouter, Route, Routes } from "react-router";
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/amthal" element={<Amthal />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
