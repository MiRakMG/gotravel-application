import './App.css';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import RightNavbar from './components/HautNavbar/HautNavbar';

import NavContext from './Context/NavContext';
function App() {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav};

  return (
    <div className="App">
      <NavContext.Provider value={value}>
        <Navbar />
        <Container stickyNav={<RightNavbar />} />
      </NavContext.Provider>
    </div>
  );
}

export default App;
