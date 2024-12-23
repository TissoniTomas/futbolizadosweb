import React from 'react'
import HomePage from './pages/HomePage'
import ChampionsLeague from './pages/ChampionsLeague';
import NavBarPage from './components/NavBar/NavBar'
import LeagueList from './components/LeaguesList/LeagueList';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (

    <Router>
      <NavBarPage/>
      <LeagueList/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/champions-league' element={<ChampionsLeague/>}/>
      
      </Routes>

    </Router>
  )
}

export default App