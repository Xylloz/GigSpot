import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import SplashPage from '../components/SplashPage.tsx';
import UserForm from '../components/UserForm.tsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/splashpage" element={<SplashPage />} />
        <Route path="/employee" element={<UserForm formType="employee" />} /> 
        <Route path="/employer" element={<UserForm formType="employer" />} />  
      </Routes>
    </Router>
  </React.StrictMode>,
);
