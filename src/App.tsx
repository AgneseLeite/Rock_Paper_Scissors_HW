import './App.css'
import { Routes, Route, NavLink, Link } from "react-router-dom"; 
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import { useTranslation, Trans } from 'react-i18next';
import { Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';


function App() {

  return (
    <div className="app__container">
      <Navigation />

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/game" element={ <Game />} />
      </Routes>

    </div>
  )
}

export default App;
