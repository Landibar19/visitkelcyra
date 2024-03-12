import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { HomePage } from './pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
      </div>
  );
}

export default App;
