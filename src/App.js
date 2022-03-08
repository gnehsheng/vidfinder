import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar'
import MainPage from './Pages/Main';
import Players from './Pages/Players';



function App() {

  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/home' element={<MainPage />} />
      <Route path='/players' element={<Players />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
