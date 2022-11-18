import './App.css';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import RightNavbar from './components/HautNavbar/HautNavbar';
import Triplist from './components/Voyage/Triplist';
import Hotels from './components/Hotels/Hotels';
import CreateTrip from './components/Voyage/CreateTrip';

import NavContext from './Context/NavContext';
function App() {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav};

  return (
    <div className="App">
      <NavContext.Provider value={value}>
        <Navbar />
        <Container stickyNav={<RightNavbar />}
        content={
          <Routes>
            <Route path='/' element={<Triplist />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/createTrip' element={<CreateTrip />} />
          </Routes>
        } />
      </NavContext.Provider>
    </div>
  );
}

export default App;
