import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import RightNavbar from './components/HautNavbar/HautNavbar';
import Triplist from './components/Voyage/Triplist';
import Hotels from './components/Hotels/Hotels';
import CreateTrip from './components/Voyage/CreateTrip';
import CreateHotel from './components/Hotels/CreateHotel';

import NavContext from './Context/NavContext';
import Activites from './components/Activites/Activites';
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
            <Route path='createTrip/*' element={<CreateTrip />} />
            <Route path='/createHotel' element={<CreateHotel />} />
            <Route path='/activites' element={<Activites />} />
          </Routes>
        } />
      </NavContext.Provider>
    </div>
  );
}

export default App;
