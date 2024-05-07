import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { HomePage } from './pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MenuItem from './components/Menuitems/Menuitem';
import MenuItemDetails from './components/MenuItemDetails/MenuItemDetails';
import Results from './components/Search/Results';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menuitem/:link" element={<MenuItem/>} />
        <Route path="menuitem/:link/:detailLink" element={<MenuItemDetails/>} />
        <Route path="/results/:query" element={<Results/>} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
      </div>
  );
}

export default App;
