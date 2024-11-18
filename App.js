import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import UserList from './components/UserList';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
